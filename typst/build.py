#!/usr/bin/env python3
"""Strong Magic 中文版 Typst 排版管线。

用法:
    python3 typst/build.py

流程:
    1. 解析 docs/SUMMARY.md，得到有序条目（前置 / 分部 / 章 / 节 / 小节 / 后置）。
    2. 逐文件预处理 markdown（取走首行 H1 作标题、<sup>N</sup> 转 markdown 脚注、
       引用块落款右对齐），再经 pandoc 转成 typst 片段。
    3. 按 封面 → 版权 → 目录 → 前置 → 各部分 → 版权 的顺序拼出 main.typ。
    4. typst compile 出项目根的 strong_magic_typst.pdf。

只读 docs/，可反复重跑。仅依赖 Python 标准库 + pandoc + typst。
"""

import re
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
BUILD_DIR = ROOT / "typst" / "build"
MAIN_TYP = BUILD_DIR / "main.typ"
OUT_PDF = ROOT / "strong_magic_typst.pdf"

PANDOC_BASE = ["pandoc", "-f", "markdown-auto_identifiers", "-t", "typst", "--wrap=none"]

# typst 标题级别: 分部=1, 章=2, 节=3, 小节=4
CHAPTER_LEVEL = 2


# ---------- SUMMARY.md 解析 ----------

class Node:
    __slots__ = ("title", "path", "children")

    def __init__(self, title, path):
        self.title = title
        self.path = path
        self.children = []


def parse_summary(text):
    """返回有序单元列表:
    ("front", node)  前置裸链接（章级）
    ("part", title)  分部标题行
    ("tree", node)   顶层列表项（可能带子树）
    ("back", node)   后置裸链接（章级）
    """
    units = []
    stack = []  # [(indent, node)]
    seen_body = False  # 是否已出现列表项或分部标题
    for raw in text.splitlines():
        s = raw.strip()
        if not s or s == "# Summary" or s == "---":
            continue
        if s.startswith("<!--"):  # html 注释（本文件均为单行注释）
            continue
        m = re.match(r"^(\s*)-\s+\[(.*?)\]\((.*?)\)\s*$", raw)
        if m:
            seen_body = True
            indent = len(m.group(1))
            node = Node(m.group(2).strip(), m.group(3).strip())
            while stack and stack[-1][0] >= indent:
                stack.pop()
            if stack:
                stack[-1][1].children.append(node)
            else:
                units.append(("tree", node))
            stack.append((indent, node))
            continue
        m = re.match(r"^(#+)\s+(.*)$", s)
        if m:  # 分部标题行
            seen_body = True
            stack = []
            units.append(("part", m.group(2).strip()))
            continue
        m = re.match(r"^\[(.*?)\]\((.*?)\)\s*$", s)
        if m:  # 裸链接：前置或后置
            node = Node(m.group(1).strip(), m.group(2).strip())
            units.append(("back" if seen_body else "front", node))
            continue
        # 其他行忽略
    return units


def flatten(node, level, out):
    """把树展平成 (level, title, path) 序列；空链接节点不生成页面，子条目提升一级。"""
    if node.path:
        out.append((level, node.title, node.path))
        for c in node.children:
            flatten(c, level + 1, out)
    else:
        for c in node.children:
            flatten(c, level, out)


# ---------- markdown 预处理 ----------

SUP_DEF_RE = re.compile(r"^<sup>(\d+)\.?</sup>\s*(.*)$")
SUP_REF_RE = re.compile(r"<sup>(\d+)</sup>")
# 引用块落款：>“……。”——名字<sup>1</sup>（引文结尾也可以是 。？！ 等句读）
ATTR_RE = re.compile(
    r'^(>\s*)(.*?["”’」』。？！])(——|──)([^。，；：！？\n]{1,20}?)\s*(?:<sup>(\d+)</sup>)?\s*$'
)
# 独占一行的落款：> ——名字[^1] / > ——《书名》名字<sup>1</sup>
ATTR_ONLY_RE = re.compile(r"^(>\s*)(?:——|──)\s*(.{1,40}?)\s*$")
MD_FN_DEF_RE = re.compile(r"^\[\^([^\]]+)\]:\s*(.*)$")
MD_FN_REF_RE = re.compile(r"\[\^([^\]]+)\]")
H1_RE = re.compile(r"^#\s+(.*?)\s*$")
# typst 内容块中需要警惕的字符；落款人名一般不含这些
TYPST_UNSAFE = re.compile(r"[\[\]#@$*_\\`]")

_inline_cache = {}


def md_to_typst_inline(text):
    """把一小段 markdown 转成 typst 行内标记（用于脚注落款里的注释文字）。"""
    if text not in _inline_cache:
        r = subprocess.run(
            PANDOC_BASE, input=text, capture_output=True, text=True, check=True
        )
        _inline_cache[text] = r.stdout.strip()
    return _inline_cache[text]


def preprocess(body):
    """1) <sup>N</sup> 注记转 markdown 脚注；2) 引用块落款行右对齐（raw typst）。"""
    lines = body.split("\n")
    # 去掉 markdown 分隔线（排版时用不到，pandoc 会转成 #horizontalrule）
    lines = [ln for ln in lines if ln.strip() not in ("---", "***", "___")]
    defs = {}
    md_defs = {}  # pandoc 风格的单行脚注定义 [^key]: text
    kept = []
    for ln in lines:
        m = None if ln.lstrip().startswith(">") else SUP_DEF_RE.match(ln.strip())
        if m:
            defs[m.group(1)] = m.group(2).strip()
        else:
            fm = MD_FN_DEF_RE.match(ln.strip())
            if fm:
                md_defs[fm.group(1)] = fm.group(2).strip()
            kept.append(ln)

    consumed = set()
    consumed_md = set()  # 被落款行消耗掉的 [^key] 脚注定义
    out = []
    n = len(kept)
    for i, ln in enumerate(kept):
        m = ATTR_RE.match(ln)
        if m:
            nxt = kept[i + 1].strip() if i + 1 < n else ""
            name = m.group(4).strip()
            if not nxt.startswith(">") and not TYPST_UNSAFE.search(name):
                prefix, quote = m.group(1), m.group(2)
                supn = m.group(5)
                out.append(prefix + quote)          # 引文本体（不含落款）
                out.append(prefix.rstrip())          # 空的 ">" 行：新段落
                if supn and supn in defs:
                    note = md_to_typst_inline(defs[supn])
                    consumed.add(supn)
                    out.append(
                        prefix + f"`#h(1fr)—— {name}#footnote[{note}]`{{=typst}}"
                    )
                else:
                    out.append(prefix + f"`#h(1fr)—— {name}`{{=typst}}")
                continue
        ma = ATTR_ONLY_RE.match(ln)
        if ma:
            prefix = ma.group(1)
            rest = ma.group(2)
            supn = SUP_REF_RE.search(rest)
            fnn = MD_FN_REF_RE.search(rest)
            name = MD_FN_REF_RE.sub("", SUP_REF_RE.sub("", rest)).strip()
            if not TYPST_UNSAFE.search(name):
                if supn and supn.group(1) in defs:
                    note = md_to_typst_inline(defs[supn.group(1)])
                    consumed.add(supn.group(1))
                elif fnn and fnn.group(1) in md_defs:
                    note = md_to_typst_inline(md_defs[fnn.group(1)])
                    consumed_md.add(fnn.group(1))
                else:
                    note = None
                tail_fn = f"#footnote[{note}]" if note else ""
                out.append(prefix + f"`#h(1fr)—— {name}{tail_fn}`{{=typst}}")
                continue
        out.append(ln)

    body = "\n".join(out)
    # 删掉已被落款行吸收的 [^key] 脚注定义（孤儿定义 pandoc 本来也会丢弃）
    if consumed_md:
        body = "\n".join(
            ln
            for ln in body.split("\n")
            if not ((dm := MD_FN_DEF_RE.match(ln.strip())) and dm.group(1) in consumed_md)
        )
    # 剩余 <sup>N</sup> 行内引用 → markdown 脚注引用
    body = SUP_REF_RE.sub(lambda m: f"[^sup{m.group(1)}]", body)
    tail = []
    for num, txt in defs.items():
        if num in consumed:
            continue
        if f"[^sup{num}]" in body:
            tail.append(f"[^sup{num}]: {txt}")
        else:
            # 孤儿注记（源文件里定义但正文未引用）：保留为普通段落，避免丢内容
            tail.append(txt)
    if tail:
        body += "\n\n" + "\n\n".join(tail) + "\n"
    return body


def pandoc_fragment(md_text, shift):
    cmd = list(PANDOC_BASE)
    if shift:
        cmd.append(f"--shift-heading-level-by={shift}")
    r = subprocess.run(cmd, input=md_text, capture_output=True, text=True)
    if r.returncode != 0:
        raise RuntimeError(f"pandoc 失败: {r.stderr.strip()}")
    return r.stdout


def convert_page(item):
    """item = (level, title_fallback, relpath, kind) -> (level, title, fragment, relpath, byline)"""
    level, fallback_title, relpath, kind = item
    text = (DOCS / relpath).read_text(encoding="utf-8")
    lines = text.split("\n")
    i = 0
    while i < len(lines) and not lines[i].strip():
        i += 1
    title = None
    if i < len(lines):
        m = H1_RE.match(lines[i])
        if m:
            title = m.group(1)
            lines = lines[i + 1 :]
    if title is None:
        title = fallback_title
        lines = lines[i:]
    byline = None
    signoff = None
    if kind == "front":
        lines, byline = extract_byline(lines)
        lines, signoff = extract_signoff(lines)
    frag = pandoc_fragment(preprocess("\n".join(lines)), level - 1)
    if kind == "front":
        frag = add_opening_initial(frag)
    return level, title, frag, relpath, byline, signoff


CN_DIGITS = "零一二三四五六七八九"
NUMBERED_RE = re.compile(r"第.{1,3}章|附录")

# 署名行：标题正下方的短行（拉丁名或 2-6 字中文名，可带 <sup>N</sup> 注记）
BYLINE_RE = re.compile(r"^([A-Za-z][A-Za-z .·'’-]{1,30}|[一-鿿·]{2,6})(?:<sup>(\d+)</sup>)?\s*$")


def extract_byline(lines):
    """若正文首行是署名，取出并返回 (剩余行, (名字, typst注释|None))；否则原样返回。"""
    j = 0
    while j < len(lines) and not lines[j].strip():
        j += 1
    if j >= len(lines):
        return lines, None
    m = BYLINE_RE.match(lines[j].strip())
    if not m:
        return lines, None
    name, supn = m.group(1), m.group(2)
    rest = lines[:j] + lines[j + 1 :]
    note = None
    if supn:
        for k, l in enumerate(rest):
            dm = None if l.lstrip().startswith(">") else SUP_DEF_RE.match(l.strip())
            if dm and dm.group(1) == supn:
                note = md_to_typst_inline(dm.group(2).strip())
                del rest[k]
                break
    return rest, (name, note)


def extract_signoff(lines):
    """末尾独立的短署名/日期行（如 "Juan Tamariz 1994年5月"）取出单独排版。"""
    j = len(lines) - 1
    while j >= 0:
        s = lines[j].strip()
        # 跳过空行和 <sup>N</sup> 注记定义行
        if not s or (not lines[j].lstrip().startswith(">") and SUP_DEF_RE.match(s)):
            j -= 1
            continue
        break
    if j < 0:
        return lines, None
    s = lines[j].strip()
    if len(s) > 25 or re.search(r"[。！？，；：]", s):
        return lines, None
    if not (re.match(r"^[A-Za-z]", s) or re.search(r"\d{4}\s*年", s)):
        return lines, None
    return lines[:j] + lines[j + 1 :], s


def add_opening_initial(frag):
    """给第一个正文段落的首字加放大装饰（raised initial）；引语、列表等跳过。"""
    lines = frag.split("\n")
    for i, ln in enumerate(lines):
        s = ln.strip()
        if not s or s.startswith(("#", "`", "[", "<", "-", "+")):
            continue
        indent = ln[: len(ln) - len(ln.lstrip())]
        lines[i] = (
            indent
            + f'#text(font: serif-font, size: 1.9em, weight: "bold")[{s[0]}]{s[1:]}'
        )
        break
    return "\n".join(lines)


def cn_num(n):
    if n < 10:
        return CN_DIGITS[n]
    if n < 20:
        return "十" + (CN_DIGITS[n - 10] if n > 10 else "")
    return CN_DIGITS[n // 10] + "十" + (CN_DIGITS[n % 10] if n % 10 else "")


# ---------- typst 代码生成 ----------

def ty_str(s):
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def chapter_call(title, marker=""):
    """把 "第六章 『戏剧性结构』" 拆成 kicker + 章名，其余标题原样。"""
    m = re.match(r"^(.+?)\s*『(.+)』$", title)
    if m:
        return f"#chapter-page({ty_str(m.group(2))}, kicker: {ty_str(m.group(1))}{marker})"
    return f"#chapter-page({ty_str(title)}{marker})"


def front_call(title, byline, marker=""):
    """前置部分页：front-page 调用，可带署名。"""
    args = ty_str(title)
    if byline:
        name, note = byline
        b = name + (f"#footnote[{note}]" if note else "")
        args += f", byline: [{b}]"
    return f"#front-page({args}{marker})"


# 这些小节文件在 PDF 中另起一页（而不是紧跟在章首页内容之后）
PAGEBREAK_BEFORE = {"prologue/1.md"}


def build_main(front_pages, body_units, back_pages, copyright_frag):
    g = ['#import "../template.typ": *', "#show: book-setup", ""]
    g.append("#cover-page()")
    # 目录
    g.append("#pagebreak()")
    g.append("#{")
    g.append("  set par(first-line-indent: (amount: 0em, all: true))")
    g.append("  align(center, text(font: serif-font, size: 18pt, weight: \"bold\", tracking: 0.3em)[目录])")
    g.append("  v(8mm)")
    g.append("  outline(")
    g.append("    title: none,")
    g.append("    depth: 3, indent: auto,")
    g.append("  )")
    g.append("}")
    # 前置部分（罗马数字页码）
    for i, (level, title, frag, byline, signoff) in enumerate(front_pages):
        marker = ', marker: "front"' if i == 0 else ""
        g.append(front_call(title, byline, marker))
        g.append(frag)
        if signoff:
            g.append("#v(1.2em)")
            g.append(
                '#align(right, text(font: display-font, size: 9.5pt, '
                f'style: "italic", fill: luma(50), {ty_str(signoff)}))'
            )
        g.append('#v(1.2em)')
        # 页尾菱形装饰：用 bottom 浮动固定在页面底部，不随正文溢出到下一页
        g.append('#place(bottom + center, float: true, text(size: 8pt, fill: luma(130))[♦　♦　♦])')
    # 正文（阿拉伯数字页码）
    first_body = True
    for unit in body_units:
        marker = ""
        if first_body:
            marker = ', marker: "body"'
            first_body = False
        if unit[0] == "part":
            g.append(f"#part-page({ty_str(unit[1])}{marker})")
        else:
            level, title, frag, rel = unit
            if level <= CHAPTER_LEVEL:
                g.append(chapter_call(title, marker))
            else:
                if rel in PAGEBREAK_BEFORE:
                    g.append("#pagebreak()")
                g.append(f"#heading(level: {level}, {ty_str(title)})")
            g.append(frag)
    # 后置版权（章级）
    for level, title, frag, _rel in back_pages:
        g.append(f"#copyright-back-page({ty_str(title)})[")
        g.append(frag)
        g.append("]")
    g.append("")
    return "\n".join(g)


def main():
    summary = (DOCS / "SUMMARY.md").read_text(encoding="utf-8")
    units = parse_summary(summary)

    front_items, body_units, back_items = [], [], []
    rename_map = {}  # 顶层章 relpath -> 全书章号（为缺"第X章"的标题补全）
    chapter_no = 0
    seen_part = False
    for kind, payload in units:
        if kind == "front":
            front_items.append((CHAPTER_LEVEL, payload.title, payload.path))
        elif kind == "back":
            back_items.append((CHAPTER_LEVEL, payload.title, payload.path))
        elif kind == "part":
            seen_part = True
            body_units.append(("part", payload))
        else:  # tree：顶层列表项，无论是否有链接都占一个章号
            if seen_part:
                chapter_no += 1
                if payload.path and not NUMBERED_RE.search(payload.title):
                    rename_map[payload.path] = chapter_no
            flat = []
            flatten(payload, CHAPTER_LEVEL, flat)
            body_units.extend(flat)

    # 版权页内容（卷首小字页 + 卷末章级页共用）
    copyright_frag = pandoc_fragment(
        (DOCS / "copyright.md").read_text(encoding="utf-8"), 0
    )

    # 逐文件转换（并行）
    all_items = (
        [(*it, "front") for it in front_items]
        + [(u[0], u[1], u[2], "body") for u in body_units if u[0] != "part"]
        + [(*it, "back") for it in back_items]
    )
    n = len(all_items)
    print(f"共 {n} 个 markdown 文件待转换 …", flush=True)
    with ThreadPoolExecutor(max_workers=8) as ex:
        converted4 = list(ex.map(convert_page, all_items))
    converted = []
    for i, (level, title, frag, rel, byline, signoff) in enumerate(converted4):
        if rel in rename_map and not NUMBERED_RE.search(title):
            title = f"第{cn_num(rename_map[rel])}章 『{title}』"
        if i < len(front_items):
            converted.append((level, title, frag, byline, signoff))
        else:
            converted.append((level, title, frag, rel))

    front_pages = converted[: len(front_items)]
    back_pages = converted[n - len(back_items) :]
    body_pages = converted[len(front_items) : n - len(back_items)]
    body = []
    it = iter(body_pages)
    for u in body_units:
        body.append(("part", u[1]) if u[0] == "part" else next(it))

    BUILD_DIR.mkdir(parents=True, exist_ok=True)
    MAIN_TYP.write_text(
        build_main(front_pages, body, back_pages, copyright_frag), encoding="utf-8"
    )
    print(f"已生成 {MAIN_TYP.relative_to(ROOT)}，开始编译 …", flush=True)

    r = subprocess.run(
        ["typst", "compile", "--root", str(ROOT), str(MAIN_TYP), str(OUT_PDF)],
        capture_output=True,
        text=True,
    )
    if r.returncode != 0:
        print(r.stderr, file=sys.stderr)
        sys.exit(1)
    if r.stderr.strip():
        print(r.stderr.strip())
    print(f"完成: {OUT_PDF}")


if __name__ == "__main__":
    main()

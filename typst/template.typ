// ============================================================
// Strong Magic 中文版 · Typst 版式模板
// 由 typst/build.py 生成的主文件通过 #import "../template.typ": * 引入，
// 并以 #show: book-setup 应用全局版式。
// 开本 A5，镜像页边距；正文思源宋体，引语楷体，封面西文 Didot。
// ============================================================

#let serif-font = "Noto Serif CJK SC"
// 楷体：文鼎简中楷（引语、脚注）
#let kai-font = ("AR PL KaitiM GB", "AR PL ZenKai", "Noto Serif CJK SC")
// 西文展示字体（封面）
#let display-font = ("TeX Gyre Pagella", "Noto Serif CJK SC")
// 正文：西文 TeX Gyre Pagella（covers 只覆盖拉丁）+ 中文思源宋体
#let body-font = ((name: "TeX Gyre Pagella", covers: "latin-in-cjk"), "Noto Serif CJK SC")
// 脚注：西文 Pagella + 文楷
#let note-font = ((name: "TeX Gyre Pagella", covers: "latin-in-cjk"), "AR PL KaitiM GB", "AR PL ZenKai", "Noto Serif CJK SC")

// 页码换算：前置部分（<front-start> 起）罗马数字，正文（<body-start> 起）阿拉伯数字
#let toc-pagenum(pg) = {
  let bs = query(<body-start>)
  let fs = query(<front-start>)
  if bs.len() > 0 and pg >= bs.first().location().page() {
    numbering("1", pg - bs.first().location().page() + 1)
  } else if fs.len() > 0 and pg >= fs.first().location().page() {
    numbering("i", pg - fs.first().location().page() + 1)
  } else {
    numbering("1", pg)
  }
}

// ---------- 全局版式（以 show 规则应用到整篇文档）----------
#let book-setup(doc) = {
  set document(title: "Strong Magic 中文版", author: ("Darwin Ortiz",))

  // 页面：镜像页边距
  // 页眉：奇数页右侧为当前章名，偶数页左侧为书名；
  //       分部页、章首页、正文之前的页面不显示页眉。
  // 页码在页脚居中；分部页不显示页码。
  set page(
    paper: "a5",
    margin: (inside: 22mm, outside: 16mm, top: 22mm, bottom: 22mm),
    header: context {
      // 脚注每页重新编号（页眉在页面内容之前排版）
      counter(footnote).update(0)
      let pg = here().page()
      let special = query(heading.where(level: 1).or(heading.where(level: 2)))
        .any(h => h.location().page() == pg)
      if special { return }
      let prev = query(selector(heading.where(level: 2)).before(here(), inclusive: false))
      if prev.len() == 0 { return }
      set text(font: serif-font, size: 8.5pt, fill: luma(90))
      if calc.odd(pg) {
        align(right, prev.last().body)
      } else {
        align(left)[Strong Magic]
      }
    },
    footer: context {
      let pg = here().page()
      let on-part = query(heading.where(level: 1)).any(h => h.location().page() == pg)
      if on-part { return }
      let prev = query(selector(heading.where(level: 2)).before(here(), inclusive: false))
      if prev.len() == 0 { return }
      // 前置部分用罗马数字，正文起用阿拉伯数字（以标签定位分界页）
      let num = toc-pagenum(pg)
      align(center, text(font: serif-font, size: 9pt, fill: luma(70), num))
    },
  )

  // 正文：西文 Palatino + 中文宋体-简（书宋），两端对齐、段首缩进 2em
  // 注意：typst 中相邻段落之间的间距由 par.spacing 决定且会替换 leading，
  // 因此"段间距为 0"应设为与 leading 相同，否则会行间重叠。
  set text(
    font: body-font,
    size: 9pt,
    lang: "zh",
    region: "cn",
    cjk-latin-spacing: auto,
    hyphenate: true,
  )
  set par(
    justify: true,
    leading: 0.78em,
    spacing: 0.78em,
    first-line-indent: (amount: 2em, all: true),
  )

  // 标题：全部用宋体加粗（中文出版物惯例），不用黑体
  set heading(numbering: none)
  // level 1（分部）与 level 2（章）由 part-page / chapter-page 负责呈现
  show heading.where(level: 1): set text(font: serif-font, size: 24pt, weight: "bold")
  show heading.where(level: 2): set text(font: serif-font, size: 22pt, weight: "bold")
  show heading.where(level: 3): it => {
    v(1.8em, weak: true)
    block(text(font: serif-font, size: 13pt, weight: "bold", it.body))
    v(0.9em, weak: true)
  }
  show heading.where(level: 4): it => {
    v(1.4em, weak: true)
    block(text(font: serif-font, size: 11pt, weight: "bold", it.body))
    v(0.7em, weak: true)
  }
  show heading.where(level: 5): it => {
    v(1em, weak: true)
    block(text(font: serif-font, size: 10.5pt, weight: "bold", it.body))
    v(0.5em, weak: true)
  }

  // 引用（卷首引语）：楷体、左右缩进；落款行由 raw typst 右对齐
  show quote.where(block: true): it => {
    set text(font: kai-font, size: 10.5pt, fill: luma(50))
    set par(
      first-line-indent: (amount: 0em, all: true),
      leading: 0.7em,
      spacing: 0.7em,
    )
    block(inset: (left: 3em, right: 3em, top: 1em, bottom: 1em), it)
  }

  // 列表
  set list(indent: 0.5em, body-indent: 0.7em, spacing: 0.7em, marker: ([#text(size: 1.3em)[•]],))
  show list: set par(first-line-indent: (amount: 0em, all: true))
  set enum(indent: 0.5em, body-indent: 0.9em, spacing: 0.7em)
  show enum: set par(first-line-indent: (amount: 0em, all: true))

  // 脚注：① 圈码编号（中文出版惯例），页底，短分隔线
  set footnote(numbering: "①")
  set footnote.entry(
    separator: line(length: 30%, stroke: 0.4pt + luma(80)),
    gap: 0.55em,
    indent: 0.75em,
    clearance: 0.8em,
  )
  show footnote.entry: set text(font: note-font, size: 9pt)
  show footnote.entry: set par(
    leading: 0.5em,
    first-line-indent: (amount: 0em, all: true),
  )

  // 目录：按层级缩进、点线引导页码；分部、章加粗；前置部分罗马数字页码
  set outline.entry(fill: repeat[.])
  show outline.entry: it => context {
    let loc = it.element.location()
    let num = toc-pagenum(loc.page())
    let indent-amt = if it.level == 1 { 0em } else if it.level == 2 { 1.8em } else { 3.6em }
    let row = if it.level == 1 {
      text(font: serif-font, size: 11pt, weight: "bold")[
        #it.body()#box(width: 1fr, it.fill)#num
      ]
    } else if it.level == 2 {
      text(size: 10pt, weight: "bold")[#it.body()#box(width: 1fr, it.fill)#num]
    } else {
      text(size: 9.5pt)[#it.body()#box(width: 1fr, it.fill)#num]
    }
    link(loc)[#block(
      above: if it.level == 1 { 1.5em } else { 0.75em },
      below: 0.75em,
      inset: (left: indent-amt),
      row,
    )]
  }

  doc
}

// ---------- 页面构造函数 ----------

// 封面
#let cover-page() = {
  block(width: 100%, height: 100%)[
    #align(center)[
      #v(58mm)
      #text(font: display-font, size: 27pt, tracking: 0.14em)[STRONG MAGIC]
      #v(13mm)
      #line(length: 18%, stroke: 0.6pt + luma(110))
      #v(11mm)
      #text(font: serif-font, size: 13pt, tracking: 0.9em)[中文版]
    ]
    #v(1fr)
    #align(center)[
      #text(font: serif-font, size: 11.5pt)[Darwin Ortiz 著]
      #v(5mm)
      #text(font: serif-font, size: 9.5pt, fill: luma(60))[任弈林　张隆祚　贾天时　段超　译]
      #v(28mm)
    ]
  ]
}

// 分部页：整页居中；"第二部分：角色" 拆成小号分部行 + 大号名称行
#let part-page(title, marker: none) = {
  pagebreak()
  if marker == "body" { [#metadata("body") <body-start>] }
  let m = title.match(regex("^(.+?部分)[:：\\s](.+)$"))
  block(width: 100%, height: 100%)[
    #align(center + horizon)[
      #hide(heading(level: 1)[#title])
      #if m != none {
        text(font: serif-font, size: 13pt, tracking: 0.5em, fill: luma(70))[#m.captures.at(0)]
        v(10mm)
        text(font: serif-font, size: 26pt, weight: "bold")[#m.captures.at(1)]
      } else {
        text(font: serif-font, size: 26pt, weight: "bold")[#title]
      }
      #v(12mm)
      #line(length: 24%, stroke: 0.6pt + luma(130))
    ]
  ]
}

// 章首页：另起一页、居中；kicker（如"第六章"）小字宽距在上，章名大字在下
// heading 本体隐藏但保留在文档模型中（供目录与页眉查询）
#let chapter-page(title, kicker: none, marker: none) = {
  pagebreak()
  if marker == "front" { [#metadata("front") <front-start>] }
  if marker == "body" { [#metadata("body") <body-start>] }
  hide(heading(level: 2)[#title])
  v(26mm)
  align(center)[
    #if kicker != none {
      text(font: serif-font, size: 11.5pt, tracking: 0.4em, fill: luma(70))[#kicker]
      v(7mm)
    }
    #text(font: serif-font, size: 22pt, weight: "bold")[#title]
    #v(9mm)
    #line(length: 18%, stroke: 0.6pt + luma(130))
  ]
  v(13mm)
}

// 卷末版权页：章级标题 + 稍松的行距
#let copyright-back-page(title, body) = {
  chapter-page(title)
  set par(spacing: 1.1em)
  body
}

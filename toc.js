// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="epigraph.html">楔子</a></li><li class="chapter-item expanded affix "><a href="foreword.html">一手牌，一场游戏，一本书</a></li><li class="chapter-item expanded affix "><a href="preface.html">引言</a></li><li class="chapter-item expanded "><a href="prologue/0.html"><strong aria-hidden="true">1.</strong> 序言</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="prologue/1.html"><strong aria-hidden="true">1.1.</strong> Magic As Mystery</a></li><li class="chapter-item expanded "><a href="prologue/2.html"><strong aria-hidden="true">1.2.</strong> 触及情感</a></li><li class="chapter-item expanded "><a href="prologue/3.html"><strong aria-hidden="true">1.3.</strong> 叙述型的艺术</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">效果</li><li class="chapter-item expanded "><a href="clarity/index.html"><strong aria-hidden="true">2.</strong> 清晰化</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="clarity/the-goal-of-clarity.html"><strong aria-hidden="true">2.1.</strong> 清晰化的目的</a></li><li class="chapter-item expanded "><a href="clarity/interpretation.html"><strong aria-hidden="true">2.2.</strong> 解释</a></li><li class="chapter-item expanded "><a href="clarity/selection.html"><strong aria-hidden="true">2.3.</strong> 选择</a></li><li class="chapter-item expanded "><a href="clarity/easing-the-audience-burden.html"><strong aria-hidden="true">2.4.</strong> 减轻观众的负担</a></li><li class="chapter-item expanded "><a href="clarity/clarifying-techniques.html"><strong aria-hidden="true">2.5.</strong> 清晰化的技巧</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.</strong> 信念</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">3.1.</strong> The Dynamics Of Conviction</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="conviction/the-expository-phase.html"><strong aria-hidden="true">3.1.1.</strong> 解说阶段</a></li><li class="chapter-item expanded "><a href="conviction/degrees-of-conviction.html"><strong aria-hidden="true">3.1.2.</strong> 确信程度</a></li><li class="chapter-item expanded "><a href="conviction/emotional-memory.html"><strong aria-hidden="true">3.1.3.</strong> 情感记忆</a></li><li class="chapter-item expanded "><a href="conviction/deteriorating-conviction.html"><strong aria-hidden="true">3.1.4.</strong> 破坏确信</a></li></ol></li><li class="chapter-item expanded "><a href="conviction/conditions.html"><strong aria-hidden="true">3.2.</strong> Conditions</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="conviction/identifying-important-conditions.html"><strong aria-hidden="true">3.2.1.</strong> 辨别重要条件</a></li><li class="chapter-item expanded "><a href="conviction/the-must-believe-test.html"><strong aria-hidden="true">3.2.2.</strong> 绝对相信测试</a></li><li class="chapter-item expanded "><a href="conviction/the-no-contact-condition.html"><strong aria-hidden="true">3.2.3.</strong> 无接触条件</a></li><li class="chapter-item expanded "><a href="conviction/dramatizing-conditions.html"><strong aria-hidden="true">3.2.4.</strong> 戏剧条件</a></li></ol></li><li class="chapter-item expanded "><a href="conviction/convincers.html"><strong aria-hidden="true">3.3.</strong> 说服者</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="conviction/accidental-convincers.html"><strong aria-hidden="true">3.3.1.</strong> 意外说服者</a></li><li class="chapter-item expanded "><a href="conviction/incidental-convincers.html"><strong aria-hidden="true">3.3.2.</strong> 伴随说服者</a></li><li class="chapter-item expanded "><a href="conviction/why-convincers-work.html"><strong aria-hidden="true">3.3.3.</strong> 为什么说服者有效</a></li><li class="chapter-item expanded "><a href="conviction/does-anyone-notice.html"><strong aria-hidden="true">3.3.4.</strong> 有人注意到吗？</a></li><li class="chapter-item expanded "><a href="conviction/weighing-pros-and-cons.html"><strong aria-hidden="true">3.3.5.</strong> 权衡优缺点</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="substantive-meaning/index.html"><strong aria-hidden="true">4.</strong> 实质意义</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="substantive-meaning/gambling.html"><strong aria-hidden="true">4.1.</strong> 赌博</a></li><li class="chapter-item expanded "><a href="substantive-meaning/grifting.html"><strong aria-hidden="true">4.2.</strong> 诈骗</a></li><li class="chapter-item expanded "><a href="substantive-meaning/ESP.html"><strong aria-hidden="true">4.3.</strong> ESP</a></li><li class="chapter-item expanded "><a href="substantive-meaning/occult.html"><strong aria-hidden="true">4.4.</strong> 密术</a></li><li class="chapter-item expanded "><a href="substantive-meaning/magic.html"><strong aria-hidden="true">4.5.</strong> 魔术</a></li><li class="chapter-item expanded "><a href="substantive-meaning/money.html"><strong aria-hidden="true">4.6.</strong> 金钱</a></li><li class="chapter-item expanded "><a href="substantive-meaning/sex.html"><strong aria-hidden="true">4.7.</strong> 性</a></li><li class="chapter-item expanded "><a href="substantive-meaning/me.html"><strong aria-hidden="true">4.8.</strong> 我</a></li></ol></li><li class="chapter-item expanded "><a href="copyright.html">版权</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);

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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="epigraph.html">楔子</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="foreword.html">一手牌，一场游戏，一本书</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="preface.html">引言</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="prologue/0.html"><strong aria-hidden="true">1.</strong> 序言</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="prologue/1.html"><strong aria-hidden="true">1.1.</strong> Magic As Mystery</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="prologue/2.html"><strong aria-hidden="true">1.2.</strong> 触及情感</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="prologue/3.html"><strong aria-hidden="true">1.3.</strong> 叙述型的艺术</a></span></li></ol><li class="chapter-item expanded "><li class="part-title">效果</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="clarity/index.html"><strong aria-hidden="true">2.</strong> 清晰化</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="clarity/the-goal-of-clarity.html"><strong aria-hidden="true">2.1.</strong> 清晰化的目的</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="clarity/interpretation.html"><strong aria-hidden="true">2.2.</strong> 解释</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="clarity/selection.html"><strong aria-hidden="true">2.3.</strong> 选择</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="clarity/easing-the-audience-burden.html"><strong aria-hidden="true">2.4.</strong> 减轻观众的负担</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="clarity/clarifying-techniques.html"><strong aria-hidden="true">2.5.</strong> 清晰化的技巧</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">3.</strong> 信念</span></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">3.1.</strong> The Dynamics Of Conviction</span></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="conviction/the-expository-phase.html"><strong aria-hidden="true">3.1.1.</strong> 解说阶段</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="conviction/degrees-of-conviction.html"><strong aria-hidden="true">3.1.2.</strong> 确信程度</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="conviction/emotional-memory.html"><strong aria-hidden="true">3.1.3.</strong> 情感记忆</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="conviction/deteriorating-conviction.html"><strong aria-hidden="true">3.1.4.</strong> 破坏确信</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="conviction/conditions.html"><strong aria-hidden="true">3.2.</strong> Conditions</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="conviction/identifying-important-conditions.html"><strong aria-hidden="true">3.2.1.</strong> 辨别重要条件</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="conviction/the-must-believe-test.html"><strong aria-hidden="true">3.2.2.</strong> 绝对相信测试</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="conviction/the-no-contact-condition.html"><strong aria-hidden="true">3.2.3.</strong> 无接触条件</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="conviction/dramatizing-conditions.html"><strong aria-hidden="true">3.2.4.</strong> 戏剧条件</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="conviction/convincers.html"><strong aria-hidden="true">3.3.</strong> 说服者</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="conviction/accidental-convincers.html"><strong aria-hidden="true">3.3.1.</strong> 意外说服者</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="conviction/incidental-convincers.html"><strong aria-hidden="true">3.3.2.</strong> 伴随说服者</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="conviction/why-convincers-work.html"><strong aria-hidden="true">3.3.3.</strong> 为什么说服者有效</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="conviction/does-anyone-notice.html"><strong aria-hidden="true">3.3.4.</strong> 有人注意到吗？</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="conviction/weighing-pros-and-cons.html"><strong aria-hidden="true">3.3.5.</strong> 权衡优缺点</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="suggestion/index.html"><strong aria-hidden="true">4.</strong> 暗示</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="suggestion/prestige.html"><strong aria-hidden="true">4.1.</strong> 威信</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="suggestion/atmosphere.html"><strong aria-hidden="true">4.2.</strong> 气氛</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="suggestion/reinforcement.html"><strong aria-hidden="true">4.3.</strong> 强化</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="suggestion/desire.html"><strong aria-hidden="true">4.4.</strong> 欲望</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="suggestion/planting-suggestions.html"><strong aria-hidden="true">4.5.</strong> 植入型暗示</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="suggestion/negative-suggestions.html"><strong aria-hidden="true">4.6.</strong> 负面暗示</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="substantive-meaning/index.html"><strong aria-hidden="true">5.</strong> 实质意义</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="substantive-meaning/gambling.html"><strong aria-hidden="true">5.1.</strong> 赌博</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="substantive-meaning/grifting.html"><strong aria-hidden="true">5.2.</strong> 诈骗</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="substantive-meaning/ESP.html"><strong aria-hidden="true">5.3.</strong> ESP</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="substantive-meaning/occult.html"><strong aria-hidden="true">5.4.</strong> 密术</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="substantive-meaning/magic.html"><strong aria-hidden="true">5.5.</strong> 魔术</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="substantive-meaning/money.html"><strong aria-hidden="true">5.6.</strong> 金钱</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="substantive-meaning/sex.html"><strong aria-hidden="true">5.7.</strong> 性</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="substantive-meaning/me.html"><strong aria-hidden="true">5.8.</strong> 我</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="substantive-meaning/universal-experience.html"><strong aria-hidden="true">5.9.</strong> 共同经历</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="substantive-meaning/surrealism.html"><strong aria-hidden="true">5.10.</strong> 超现实主义</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="substantive-meaning/subtext.html"><strong aria-hidden="true">5.11.</strong> 潜台词</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="substantive-meaning/the-inherent-meaningfulness-of-magic.html"><strong aria-hidden="true">5.12.</strong> 魔术的内在意义</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="substantive-meaning/credibility.html"><strong aria-hidden="true">5.13.</strong> 可信度</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="situational-meaning/index.html"><strong aria-hidden="true">6.</strong> 情境意义</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="situational-meaning/conflict-against-spectator.html"><strong aria-hidden="true">6.1.</strong> 与观众的对抗</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="situational-meaning/conflict-against-machine.html"><strong aria-hidden="true">6.2.</strong> 与机器的对抗</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="situational-meaning/conflict-against-imaginary-character.html"><strong aria-hidden="true">6.3.</strong> 与假想对手的对抗</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="situational-meaning/essential-elements.html"><strong aria-hidden="true">6.4.</strong> 基本要素</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="situational-meaning/optional-elements.html"><strong aria-hidden="true">6.5.</strong> 可选要素</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="situational-meaning/avoiding-pitfalls.html"><strong aria-hidden="true">6.6.</strong> 避免陷阱</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="situational-meaning/conflict-between-spectators.html"><strong aria-hidden="true">6.7.</strong> 观众之间的对抗</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="situational-meaning/other-conflicts.html"><strong aria-hidden="true">6.8.</strong> 其他的对抗</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="situational-meaning/risk.html"><strong aria-hidden="true">6.9.</strong> 冒险</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="situational-meaning/failure.html"><strong aria-hidden="true">6.10.</strong> 故意失败</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="situational-meaning/magic-happening-to-the-spectator.html"><strong aria-hidden="true">6.11.</strong> 魔术在观众身上发生</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="dramatic-structure/index.html"><strong aria-hidden="true">7.</strong> 戏剧性结构</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="dramatic-structure/interest-catchers.html"><strong aria-hidden="true">7.1.</strong> 抓住观众的兴趣</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="dramatic-structure/progression.html"><strong aria-hidden="true">7.2.</strong> 推进</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="dramatic-structure/surprise-and-suspense.html"><strong aria-hidden="true">7.3.</strong> 惊喜与悬念</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="dramatic-structure/the-climax.html"><strong aria-hidden="true">7.4.</strong> 高潮</a></span></li></ol><li class="chapter-item expanded "><li class="spacer"></li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="functions-of-character/index.html"><strong aria-hidden="true">8.</strong> 角色的作用</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="functions-of-character/character-and-effect.html"><strong aria-hidden="true">8.1.</strong> 角色与效果</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="functions-of-character/character-and-audience-interest.html"><strong aria-hidden="true">8.2.</strong> 角色和观众兴趣</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="creating-the-character/index.html"><strong aria-hidden="true">9.</strong> 创造角色</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="creating-the-character/why-you-need-a-character.html"><strong aria-hidden="true">9.1.</strong> 你为什么需要一个角色</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="creating-the-character/finding-your-character.html"><strong aria-hidden="true">9.2.</strong> 找到你的角色</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="creating-the-character/the-character-profile.html"><strong aria-hidden="true">9.3.</strong> 角色的概况</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="creating-the-character/reconciling-character-and-daily-life.html"><strong aria-hidden="true">9.4.</strong> 调和角色和日常的生活</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="conveying-the-character/index.html"><strong aria-hidden="true">10.</strong> 将你的角色传达给观众</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="conveying-the-character/what-you-wear.html"><strong aria-hidden="true">10.1.</strong> 你该穿什么</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="conveying-the-character/what-you-say.html"><strong aria-hidden="true">10.2.</strong> 你该说什么</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="conveying-the-character/what-you-do.html"><strong aria-hidden="true">10.3.</strong> 你应该做什么</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="conveying-the-character/what-you-use.html"><strong aria-hidden="true">10.4.</strong> 你应该用什么</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="conveying-the-character/exercises.html"><strong aria-hidden="true">10.5.</strong> 练习</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="style/index.html"><strong aria-hidden="true">11.</strong> 风格</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="style/the-elements-of-style.html"><strong aria-hidden="true">11.1.</strong> 风格的组成元素</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="style/developing-a-style.html"><strong aria-hidden="true">11.2.</strong> 发展你的风格</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="style/working-at-your-style.html"><strong aria-hidden="true">11.3.</strong> 从事于你的风格</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="style/style-as-a-conscious-act.html"><strong aria-hidden="true">11.4.</strong> 将风格作为一种意识行为</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="style/considerations-affecting-style.html"><strong aria-hidden="true">11.5.</strong> 思考影响风格</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="style/naturalness-in-style.html"><strong aria-hidden="true">11.6.</strong> 风格中的自然元素</a></span></li></ol><li class="chapter-item expanded "><li class="spacer"></li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="structure/index.html"><strong aria-hidden="true">12.</strong> 编排</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="structure/the-opener.html"><strong aria-hidden="true">12.1.</strong> 开场效果</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="structure/build.html"><strong aria-hidden="true">12.2.</strong> 结构</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="structure/the-closer.html"><strong aria-hidden="true">12.3.</strong> 结尾效果</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="unity/index.html"><strong aria-hidden="true">13.</strong> 统一性</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="unity/props.html"><strong aria-hidden="true">13.1.</strong> 道具</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="unity/theme.html"><strong aria-hidden="true">13.2.</strong> 主题</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="unity/motifs.html"><strong aria-hidden="true">13.3.</strong> 主旨</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="variety/index.html"><strong aria-hidden="true">14.</strong> 多样性</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="informal-performance/index.html"><strong aria-hidden="true">15.</strong> 非正式表演</a></span></li><li class="chapter-item expanded "><li class="spacer"></li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="audience-testing/index.html"><strong aria-hidden="true">16.</strong> 观众测试</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="audience-testing/magicians-and-consensus-reality.html"><strong aria-hidden="true">16.1.</strong> 魔术师与&quot;共识现实&quot;</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="audience-testing/the-blind-leading-the-blind.html"><strong aria-hidden="true">16.2.</strong> 盲人给盲人指路</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="audience-testing/commercial-sense.html"><strong aria-hidden="true">16.3.</strong> 商业意识</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="audience-testing/feedback.html"><strong aria-hidden="true">16.4.</strong> 反馈</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="audience-testing/debriefing.html"><strong aria-hidden="true">16.5.</strong> 复盘</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="audience-testing/performing-experience.html"><strong aria-hidden="true">16.6.</strong> 表演经验</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="time-element/index.html"><strong aria-hidden="true">17.</strong> 时间元素</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="time-element/timing.html"><strong aria-hidden="true">17.1.</strong> 时机</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="time-element/pacing.html"><strong aria-hidden="true">17.2.</strong> 节奏</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="time-element/tempo.html"><strong aria-hidden="true">17.3.</strong> 速度</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="immediacy/index.html"><strong aria-hidden="true">18.</strong> 即时性</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="immediacy/planned-spontaneity.html"><strong aria-hidden="true">18.1.</strong> 经过计划的自发行为</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="immediacy/induced-responses.html"><strong aria-hidden="true">18.2.</strong> 诱导反应</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="immediacy/special-effects.html"><strong aria-hidden="true">18.3.</strong> 特别的效果</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="immediacy/audience-interaction.html"><strong aria-hidden="true">18.4.</strong> 观众互动</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="immediacy/situational-meaning.html"><strong aria-hidden="true">18.5.</strong> 情景意义</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="attention-control/index.html"><strong aria-hidden="true">19.</strong> 控制注意力</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="attention-control/mapping-the-route.html"><strong aria-hidden="true">19.1.</strong> 绘制线路</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="attention-control/tools-of-attention-control.html"><strong aria-hidden="true">19.2.</strong> 控制注意力的工具</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="attention-control/directional-misdirection.html"><strong aria-hidden="true">19.3.</strong> 错误引导的方向性</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="attention-control/intensity-misdirection.html"><strong aria-hidden="true">19.4.</strong> 错误引导的强度</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="attention-control/distractions.html"><strong aria-hidden="true">19.5.</strong> 让人分心的事情</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="audiences/index.html"><strong aria-hidden="true">20.</strong> 观众</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="audiences/attention-span.html"><strong aria-hidden="true">20.1.</strong> 观众的注意力持续时间</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="audiences/size.html"><strong aria-hidden="true">20.2.</strong> 观众的规模</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="audiences/magicians.html"><strong aria-hidden="true">20.3.</strong> 魔术师观众</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="assistants/index.html"><strong aria-hidden="true">21.</strong> 助手</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="assistants/the-importance-of-assistants.html"><strong aria-hidden="true">21.1.</strong> 助手的重要性</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="assistants/qualities-of-a-good-assistant.html"><strong aria-hidden="true">21.2.</strong> 一位好助手的品质</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="assistants/one-assistant-or-two.html"><strong aria-hidden="true">21.3.</strong> 选一个助手，还是两个？</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="assistants/who-chooses.html"><strong aria-hidden="true">21.4.</strong> 选择谁？</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="assistants/choosing-an-assistant.html"><strong aria-hidden="true">21.5.</strong> 选择助手</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="assistants/getting-them-up.html"><strong aria-hidden="true">21.6.</strong> 让观众上来</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="hecklers/index.html"><strong aria-hidden="true">22.</strong> 奥客</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="hecklers/the-psychology-of-heckling.html"><strong aria-hidden="true">22.1.</strong> 奥客心理</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="hecklers/theorizing.html"><strong aria-hidden="true">22.2.</strong> 讲解</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="hecklers/challenging.html"><strong aria-hidden="true">22.3.</strong> 挑战</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="hecklers/grabbing.html"><strong aria-hidden="true">22.4.</strong> 抢夺</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="hecklers/the-challenge-attitude.html"><strong aria-hidden="true">22.5.</strong> 挑战的态度</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="hecklers/interrupting.html"><strong aria-hidden="true">22.6.</strong> 打断</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="hecklers/getting-nailed.html"><strong aria-hidden="true">22.7.</strong> 被抓现行</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="the-unexpected/index.html"><strong aria-hidden="true">23.</strong> 意料之外</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="the-unexpected/practice-and-rehearsal.html"><strong aria-hidden="true">23.1.</strong> 练习与彩排</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="the-unexpected/screw-ups.html"><strong aria-hidden="true">23.2.</strong> 演砸了</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="the-unexpected/debriefing.html"><strong aria-hidden="true">23.3.</strong> 复盘</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="the-unexpected/unforeseen-distractions.html"><strong aria-hidden="true">23.4.</strong> 意外使人分心的事情</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="appendix/index.html"><strong aria-hidden="true">24.</strong> 附录</a></span></li><li class="chapter-item expanded "><li class="spacer"></li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="copyright.html">版权</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();


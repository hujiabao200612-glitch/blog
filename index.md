---
layout: page
title: 首页
---

<link rel="preconnect" href="https://fonts.loli.net" crossorigin>
<link rel="stylesheet" href="https://fonts.loli.net/css2?family=Noto+Serif+SC:wght@400;600;700;900&display=swap">

<div class="hero-intro" markdown="1">
<canvas id="hero-particles"></canvas>

## 👋 你好，我是胡斯源

<p class="typing-line"><span id="typed-text"></span><span class="caret">▍</span></p>

北京理工大学徐特立英才班 2025 级本科生（大二）。

研究兴趣：**深度学习**、**强化学习**、**多模态大模型**。

<div class="tech-badges" markdown="0">
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python" loading="lazy" />
  <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white" alt="PyTorch" loading="lazy" />
  <img src="https://img.shields.io/badge/CUDA-76B900?style=flat-square&logo=nvidia&logoColor=white" alt="CUDA" loading="lazy" />
  <img src="https://img.shields.io/badge/C++-00599C?style=flat-square&logo=cplusplus&logoColor=white" alt="C++" loading="lazy" />
  <img src="https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux" loading="lazy" />
  <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" alt="Git" loading="lazy" />
</div>

**联系**

- GitHub：[hujiabao200612-glitch](https://github.com/hujiabao200612-glitch)
- 邮箱：hujiabao200612@gmail.com

</div>

## 📊 GitHub 动态
{:.reveal}

<div class="gh-stats" markdown="0">
  <img src="https://github-readme-stats.vercel.app/api?username=hujiabao200612-glitch&show_icons=true&theme=transparent&hide_border=true&title_color=8b5e34&icon_color=8b5e34&text_color=5c4a32" alt="GitHub Stats" loading="lazy" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=hujiabao200612-glitch&layout=compact&theme=transparent&hide_border=true&title_color=8b5e34&text_color=5c4a32" alt="Top Languages" loading="lazy" />
</div>

## 📌 板块
{:.reveal}

- [📦 **项目**]({{ '/projects/' | relative_url }}) — GitHub 上的项目：Ascend-910B PPO-RLHF、算子选择策略等
- [📖 **我看的论文**]({{ '/papers/' | relative_url }}) — 精读论文的中英双语笔记
- [✏️ **博客文章**]({{ '/archives/' | relative_url }}) — 学习笔记与思考，敬请期待

## 🎓 个人经历
{:.reveal}

<div class="duo-timelines reveal" markdown="0">
  <div>
    <h4>🔬 科研经历</h4>
    <ul class="vtimeline">
      <li>
        <span class="tl-date">2026.01 – 2026.09</span>
        <div class="tl-title">校级大创 · DQN 自适应算子选择</div>
        <div class="tl-desc">复现 UCB 算法，用 DQN 做自适应算子选择</div>
      </li>
      <li>
        <span class="tl-date">2026.09 – 2026.10</span>
        <div class="tl-title">Ascend-910B PPO-RLHF</div>
        <div class="tl-desc">在 Ascend 910B 上做 PPO RLHF 后训练，核心工作是奖励函数设计，做过稀疏/稠密两种奖励的消融对比</div>
      </li>
    </ul>
  </div>
  <div>
    <h4>📚 学习经历</h4>
    <ul class="vtimeline">
      <li>
        <span class="tl-date">2025 – 2029</span>
        <div class="tl-title">本科</div>
        <div class="tl-desc">北京理工大学<br>人工智能（徐特立英才班）</div>
      </li>
    </ul>
  </div>
</div>

## 📝 最新文章
{:.reveal}

{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url | relative_url }}) · {{ post.date | date: "%Y-%m-%d" }}
{% else %}
> 还没有文章，敬请期待。
{% endfor %}

<div id="reading-progress"></div>
<button id="back-to-top" aria-label="回到顶部" title="回到顶部">↑</button>

<script>
(function() {
  var lines = [
    "在 Ascend 910B 上训过 PPO。",
    "在读论文，在找方向。",
    "相信少走弯路也是一种天赋。"
  ];
  var el = document.getElementById("typed-text");
  if (!el) return;
  var li = 0, ci = 0, deleting = false;
  function tick() {
    var line = lines[li];
    if (!deleting) {
      ci++;
      el.textContent = line.slice(0, ci);
      if (ci === line.length) { deleting = true; setTimeout(tick, 1600); return; }
      setTimeout(tick, 70);
    } else {
      ci--;
      el.textContent = line.slice(0, ci);
      if (ci === 0) { deleting = false; li = (li + 1) % lines.length; setTimeout(tick, 400); return; }
      setTimeout(tick, 35);
    }
  }
  tick();
})();

/* reading progress bar + back to top */
(function() {
  var bar = document.getElementById("reading-progress");
  var btn = document.getElementById("back-to-top");
  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var p = max > 0 ? (h.scrollTop / max) * 100 : 0;
    bar.style.width = p + "%";
    if (h.scrollTop > 400) { btn.classList.add("show"); }
    else { btn.classList.remove("show"); }
  }
  btn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

/* hero particle network (warm, subtle) */
(function() {
  var c = document.getElementById("hero-particles");
  if (!c || !c.getContext) return;
  var ctx = c.getContext("2d"), pts = [], mouse = { x: -9999, y: -9999 };
  var hero = c.parentElement;
  function resize() { c.width = hero.offsetWidth; c.height = hero.offsetHeight; }
  resize();
  window.addEventListener("resize", resize);
  var N = 55;
  for (var i = 0; i < N; i++) {
    pts.push({
      x: Math.random() * c.width, y: Math.random() * c.height,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.5
    });
  }
  hero.addEventListener("mousemove", function(e) {
    var r = c.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  });
  hero.addEventListener("mouseleave", function() { mouse.x = -9999; mouse.y = -9999; });
  (function tick() {
    ctx.clearRect(0, 0, c.width, c.height);
    var i, j, p;
    for (i = 0; i < N; i++) {
      p = pts[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > c.width) p.vx *= -1;
      if (p.y < 0 || p.y > c.height) p.vy *= -1;
      var dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.sqrt(dx * dx + dy * dy);
      if (d < 100 && d > 0.1) { p.x += dx / d * 1.1; p.y += dy / d * 1.1; }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, 6.283);
      ctx.fillStyle = "rgba(139,94,52,0.30)";
      ctx.fill();
    }
    for (i = 0; i < N; i++) for (j = i + 1; j < N; j++) {
      var a = pts[i], b = pts[j], ddx = a.x - b.x, ddy = a.y - b.y, d2 = ddx * ddx + ddy * ddy;
      if (d2 < 110 * 110) {
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = "rgba(139,94,52," + (0.12 * (1 - d2 / 12100)).toFixed(3) + ")";
        ctx.lineWidth = 1; ctx.stroke();
      }
    }
    requestAnimationFrame(tick);
  })();
})();

/* scroll reveal */
(function() {
  var els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach(function(el) { el.classList.add("visible"); });
    return;
  }
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(function(el) { io.observe(el); });
})();
</script>

<style>
.typing-line { font-size: 1.05rem; color: #8b5e34; min-height: 1.8em; margin: 0.4em 0 1em; }
.caret { animation: blink 1s step-end infinite; }
@keyframes blink { 50% { opacity: 0; } }
.gh-stats { display: flex; flex-wrap: wrap; gap: 12px; margin: 0.5em 0 1em; }
.gh-stats img { max-width: 100%; height: auto; }
.hero-intro h2 { margin-top: 0; }
</style>

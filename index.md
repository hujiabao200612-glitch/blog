---
layout: page
title: 首页
---

<div class="hero-intro" markdown="1">

## 👋 你好，我是胡斯源

<p class="typing-line"><span id="typed-text"></span><span class="caret">▍</span></p>

北京理工大学徐特立英才班 2025 级本科生（大二）。

研究兴趣：**深度学习**、**强化学习**、**多模态大模型**。

**做过的事**

- **Ascend-910B-PPO-RLHF**：在 Ascend 910B 上做 PPO RLHF 后训练，基于 verl + vllm-ascend；核心工作是奖励函数设计，做过稀疏/稠密两种奖励的消融对比
- **校级大创**：复现 UCB 算法，用 DQN 做自适应算子选择
- 正在学 cs231n，补计算机视觉基础

**现在**

- 在看多模态大模型、具身智能方向的论文，找科研实习中

**联系**

- GitHub：[hujiabao200612-glitch](https://github.com/hujiabao200612-glitch)

</div>

## 📊 GitHub 动态

<div class="gh-stats" markdown="0">
  <img src="https://github-readme-stats.vercel.app/api?username=hujiabao200612-glitch&show_icons=true&theme=transparent&hide_border=true&title_color=8b5e34&icon_color=8b5e34&text_color=5c4a32" alt="GitHub Stats" loading="lazy" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=hujiabao200612-glitch&layout=compact&theme=transparent&hide_border=true&title_color=8b5e34&text_color=5c4a32" alt="Top Languages" loading="lazy" />
</div>

## 📌 板块

- [📦 **项目**]({{ '/projects/' | relative_url }}) — GitHub 上的项目：Ascend-910B PPO-RLHF、算子选择策略等
- [📖 **我看的论文**]({{ '/papers/' | relative_url }}) — 精读论文的中英双语笔记
- [✏️ **博客文章**]({{ '/archives/' | relative_url }}) — 学习笔记与思考，敬请期待

## 🎓 个人经历

- **2025 – 2029** ｜ 北京理工大学，人工智能专业，本科（徐特立英才班）

## 📝 最新文章

{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url | relative_url }}) · {{ post.date | date: "%Y-%m-%d" }}
{% else %}
> 还没有文章，敬请期待。
{% endfor %}

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
</script>

<style>
.typing-line { font-size: 1.05rem; color: #8b5e34; min-height: 1.8em; margin: 0.4em 0 1em; }
.caret { animation: blink 1s step-end infinite; }
@keyframes blink { 50% { opacity: 0; } }
.gh-stats { display: flex; flex-wrap: wrap; gap: 12px; margin: 0.5em 0 1em; }
.gh-stats img { max-width: 100%; height: auto; }
.hero-intro h2 { margin-top: 0; }
</style>

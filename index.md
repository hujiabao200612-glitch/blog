---
layout: page
title: 斯源的博客
---

胡斯源，北京理工大学徐特立英才班 2025 级本科生。研究兴趣：深度学习、强化学习、多模态大模型。[更多关于我 →]({{ '/about/' | relative_url }})

## 📌 板块

- [📦 **项目**]({{ '/projects/' | relative_url }}) — GitHub 上的项目：Ascend-910B PPO-RLHF、算子选择策略等
- [📖 **我看的论文**]({{ '/papers/' | relative_url }}) — 精读论文的中英双语笔记
- [✏️ **博客文章**]({{ '/archives/' | relative_url }}) — 学习笔记与思考，敬请期待
- [👤 **关于**]({{ '/about/' | relative_url }}) — 个人简介

## 📰 News

- **2026-10-13** ｜ 个人博客搭建中
- **2026-10-12** ｜ 与中科院自动化所张璐老师课题组交流科研实习

## 📝 最新文章

{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url | relative_url }}) · {{ post.date | date: "%Y-%m-%d" }}
{% else %}
> 还没有文章，敬请期待。
{% endfor %}

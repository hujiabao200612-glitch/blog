---
layout: page
title: 斯源的博客
---

胡斯源，北京理工大学徐特立英才班 2025 级本科生。研究兴趣：深度学习、强化学习、多模态大模型。[更多关于我 →](/blog/about/)

## News

| 2026-10-13 | 个人博客搭建中 |
| 2026-10-12 | 与中科院自动化所张璐老师课题组交流科研实习 |

## 最新文章

{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url | relative_url }}) · {{ post.date | date: "%Y-%m-%d" }}
{% else %}
> 还没有文章，敬请期待。
{% endfor %}

## 板块

- [📦 项目](/blog/projects/) — GitHub 上的项目
- [📖 我看的论文](/blog/papers/) — 精读论文的中英双语笔记

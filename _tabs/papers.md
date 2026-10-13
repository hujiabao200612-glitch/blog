---
title: 我看的论文
icon: fas fa-book-open
order: 2
---

这里收录我精读过的论文：外面是中文摘要，点进去是中英双语全文，顶部附 arXiv 链接。

{% for paper in site.papers reversed %}
<div class="paper-card" style="border:1px solid var(--card-border-color,#e9ecef);border-radius:8px;padding:1.25rem;margin-bottom:1.25rem;">
  <h3 style="margin-top:0;"><a href="{{ paper.url | relative_url }}">{{ paper.title }}</a></h3>
  <p style="color:var(--text-muted-color,#6c757d);font-size:.85rem;margin-bottom:.75rem;">
    {{ paper.date | date: "%Y-%m-%d" }} · arXiv:{{ paper.arxiv_id }}
  </p>
  <p style="margin-bottom:0;">{{ paper.abstract_zh }}</p>
</div>
{% endfor %}

{% if site.papers.size == 0 %}
> 还没有收录论文，敬请期待。
{: .prompt-tip }
{% endif %}

---
title: 项目
icon: fas fa-code
order: 1
---

{% assign projects = site.data.projects %}
{% for p in projects %}
<div class="paper-card" style="border:1px solid var(--card-border-color,#e9ecef);border-radius:8px;padding:1.25rem;margin-bottom:1.25rem;">
  <h3 style="margin-top:0;"><a href="{{ p.url }}" target="_blank" rel="noopener">{{ p.name }}</a></h3>
  <p style="color:var(--text-muted-color,#6c757d);font-size:.85rem;margin-bottom:.75rem;">{{ p.tech }}</p>
  <p style="margin-bottom:0;">{{ p.desc }}</p>
</div>
{% endfor %}

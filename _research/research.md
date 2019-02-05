---
layout: page
title: Research & Projects
tab: Research
permalink: /research/
---

{% for post in site.research %}

{% if post.title == "Centre de Recherche sur l'Interprétation au Clavecin (CRIC)" %}
  * {{ post.title }}
{% else %}
  * [ {{ post.title }} ]({{ site.baseurl }}{{ post.url }})
{% endif %}

{% endfor %}

---
layout: page
title: Research & Projects
tab: Research
permalink: /research/
---

{% for post in site.research %}
{% if post.type == 'project' %}
{% if post.title == "Centre de Recherche sur l'Interprétation au Clavecin (CRIC)" %}

* {{ post.title }}
  {% else %}
  {% if post.link %}
* [ {{ post.title }}]({{ post.link }})
  {% else %}
* [ {{ post.title }} ]({{ site.url }}{{ post.url }})
  {% endif %}

{% endif %}
{% endif %}

{% endfor %}

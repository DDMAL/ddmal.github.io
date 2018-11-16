---
layout: page
title: Research & Projects
---

{% for post in site.research %}
  * [ {{ post.title }} ]({{ site.baseurl }}{{ post.url }})
{% endfor %}

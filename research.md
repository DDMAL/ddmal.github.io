---
layout: page
title: Research & Projects
tab: Research
---

{% for post in site.research %}
  * [ {{ post.title }} ]({{ site.baseurl }}{{ post.url }})
{% endfor %}

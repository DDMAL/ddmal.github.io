---
layout: page
title: Media
---

{% assign media_years = site.media | map: 'presentation_year' | uniq | sort | reverse %}

{% for year in media_years %}
## {{ year }}
<hr>  
{% assign media_list = site.media | sort: 'content' %}
{% for item in media_list %}
  {% if item.presentation_year == year %}
  * {{ item.content }}
  {% endif %}
{% endfor %}
<br>  
{% endfor %}

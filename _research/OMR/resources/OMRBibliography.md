---
layout: page
title: OMR Bibliography
tab: Research
---

{% assign OMRbibliography_years = site.OMRbibliography | map: 'year' | uniq | sort | reverse %}

{% for year in OMRbibliography_years %}
## {{ year }}
<hr>  
{% assign OMRbibliography_list = site.OMRbibliography | sort: 'content' %}
{% for item in OMRbibliography_list %}
  {% if item.year == year %}
  * {{ item.content }}
  {% endif %}
{% endfor %}
<br>
{% endfor %}

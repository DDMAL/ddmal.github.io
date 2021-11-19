---
layout: page
title: Presentations
---

{% assign presentation_years = site.presentations | map: "presentation_year" | uniq | reverse %}

{% for year in presentation_years %}
## {{ year }}
<hr>
{% assign presentation_list = site.presentations | sort: 'content' %} 
{% for presentation in presentation_list %}
{% if presentation.presentation_year == year %}  
*  {{ presentation.content }}   
{% endif %}
{% endfor %}
<br>
{% endfor %}

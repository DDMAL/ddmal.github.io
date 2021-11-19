---
layout: page
title: Posters
---

{% assign posters_years = site.posters | map: "presentation_year" | uniq | reverse %}

{% for year in posters_years %}
## {{ year }}
<hr>
{% assign posters_list = site.posters | sort: 'content' %} 
{% for item in posters_list %}
{% if item.presentation_year == year %}  
*  {{ item.content }}   
{% endif %}
{% endfor %}
<br>
{% endfor %}

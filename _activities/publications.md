---
layout: page
title: Publications
---

{% assign publication_years = site.publications | map: "year" | uniq | reverse %}

{% for year in publication_years %}
## {{ year }}
<hr>
{% assign publication_list = site.publications | sort: 'content' %} 
{% for publication in publication_list %}
  {% if publication.year == year %}  
  * {{ publication.content }}   
  {% endif %}
{% endfor %}
<br>
{% endfor %}


<!-- code for arrow that collapses years like on SIMSSA site -->

<!-- 
{% assign publication_years = site.publications | map: "year" | uniq | reverse %}

{% for year in publication_years %}

  <h2 data-toggle="collapse" data-target="#{{ year }}">
    {{ year }}
    <img class="icon_rotation" src="{{ site.url }}/assets/0-expand_on.png" style="float:right;width:50px;height:50px" data-toggle="collapse" data-target="#{{ year }}" />
  </h2>
  <hr>
  <div id="{{ year }}" class="collapse in">

    {% assign publication_list = site.publications | sort: 'content' %}
    <ul>
      {% for publication in publication_list %}
        {% if publication.year == year %}
          <li>

            {{ publication.content }}

            {% comment %}

            {{ presentation.presentation_author }}.
            {{ presentation.presentation_year }}.
            "{{ presentation.title }}."
            {% if presentation.format == 'presentation' %}
              Presented at the
            {% else %}
              {{ presentation.format | capitalize }} presented at the
            {% endif %}
            {{ presentation.conference }},
            {{ presentation.location }},
            {{ presentation.presentation_date | date: "%B %d"}}.

            {% endcomment %}
          </li>
        {% endif %}
      {% endfor %}
    </ul>
  </div>
  <br>

{% endfor %}

<script>
$(document).ready(function(){
  $('.icon_rotation').on({
    'click': function () {
      var origsrc = $(this).attr('src');
      var src = '';
      if (origsrc == '{{ site.url }}/assets/0-expand_off.png') src = '{{ site.url }}/assets/0-expand_on.png';
      if (origsrc == '{{ site.url }}/assets/0-expand_on.png') src = '{{ site.url }}/assets/0-expand_off.png';
      $(this).attr('src', src);
    }
  });
});
</script>
 -->
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

<!-- code for arrow that collapses years like on SIMSSA site -->

<!-- {% assign presentation_years = site.presentations | map: "presentation_year" | uniq | reverse %}

{% for year in presentation_years %}

  <h2 data-toggle="collapse" data-target="#{{ year }}">
    {{ year }}
    <img class="icon_rotation" src="{{ site.url }}/assets/0-expand_on.png" style="float:right;width:50px;height:50px" data-toggle="collapse" data-target="#{{ year }}" />
  </h2>
  <hr>
  <div id="{{ year }}" class="collapse in">
    {% assign presentation_list = site.presentations | sort: 'content' %}
    <ul>
      {% for presentation in presentation_list %}
        {% if presentation.presentation_year == year %}
          <li>

            {{ presentation.content }}

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
</script> -->

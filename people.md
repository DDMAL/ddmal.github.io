---
layout: page
title: People
tab: People
---

{% include textpic.html imgurl="/assets/DDMAL Screen Shot 2020-09-28_1.png" text="2020" %}

<br>

**_l-r_** :

<hr>
{% include textpic.html imgurl="/assets/DDMALSummer2019-1280px.png" text="2019" %}

<br>

**_l-r_** :

<hr>
{% include textpic.html imgurl="/assets/DDMALSummer2018-1000px.jpg" text="2018" %}

<br>

**_l-r_** : ****Ichiro Fujinaga****, Minh Anh Nguyen, Zoé McLennan, Juliette Regimbal, Alex Daigle, Eric Liu, Gabriel Vigliensoni, Martha Thomae, Gustavo Polins Pedro, Tim de Reuse, Emily Hopkins, Noah Baxter, Yaolong Ju, Laura Beauchamp, Andrew Kam, Vi-An Tran, Néstor Nápoles, Julie Cumming
<hr>

{% include textpic.html imgurl="/assets/DDMALSummer2017-1000px.jpg" text="2017" %}
<br>
**_l-r_** : Claire Arthur, Yaolong Ju, Martha Thomas, Gabriel Vigliensoni, Alex Daigle, Andrew Tran, Ké Zhang, Zoé McLennan, Sacha Perry-Fagant, Emily Hopkins, Zeyad Saleh, Ichiro Fujinaga
<hr>

{% include textpic.html imgurl="/assets/Optimized-ddmal2016.jpg" text="2016" %}
<br>
**_l-r_** : Andrew Fogarty, Justin Bell, Jérôme Parent-Lévesque, Gabriel Vigliensoni, Arielle Goldman, Martha Thomae, Alex Parmentier, Nicky Mirfallah, Neda Eshraghi, Ichiro Fujinaga, Ryan Bannon, William Bain, Tristano Tenaglia, Emily Hopkins, Marina Borsodi-Benson, Andrew Hankinson, Jorge Calvo Zaragoza, Alexander Morgan, Véronique Lagacé, Julie Cumming, Reiner Krämer
<hr>

{% include textpic.html imgurl="/assets/ddmal2014_09e.jpg" text="2014" %}
<br>
**_l-r_** : Gabriel Vigliensoni, Ling-Xiao Yang, Lillio Mok, Andrew Horwitz, Ryan Bannon, Ruth Berkow, Andrew Fogarty, Evan Magoni, Andrew Hankinson, Ichiro Fujinaga, Tim Wilfong, Christopher Antila, Jason Leung
<hr>

{% include textpic.html imgurl="/assets/ddmal-labphoto-2012c.jpg" text="2012" %}
<br>
**_l-r_** : Jason Hockman Gabriel Vigliensoni, Wendy Li, Andrew Hankinson, Catherine Motuz, Ichiro Fujinaga, Greg Burlet, Saining li, Brian Stern, Hannah Robertson, Anton Khelou, Peter Henderson, Ying Qing
<hr>

{% include textpic.html imgurl="/assets/ddmal_highres2011a.jpg" text="2011" %}
<br>
**_l-r_** : Greg Burlet, Jason Hockman, Gabriel Vigliensoni, Wendy Liu, Alastair Porter, Ichiro Fujinaga, Saining Li, Andrew Hankinson, Catherine Motuz, Hannah Robertson, Mathieu Bergeron, Ashley Burgoyne, Remi Chiu
<hr>

{% include textpic.html imgurl="/assets/lab20060518b.jpg" text="2006" %}
<br>
**_l-r_** : Daniel McEnnis, Ashley Burgoyne, Rebecca Fiebrink, Cory McKay, Ichiro Fujinaga, Laurent Pugin, Catherine Lai, Beinan Li
<hr>

{% assign people = site.people | sort: 'last_name' %}

## Supervisor

{% for person in people %}
  {% if person.role == 'supervisor' %}
  {% if person.link %}
  <a href="{{ person.link }}">{{ person.title }}</a>
  {% else %}
  {{ person.title }}
  {% endif %}
  {% endif %}
{% endfor %}

<hr>

## Post-Doctoral Fellows

<ul class="ulist-html">
{% for person in people %}
  {% if person.role == 'post-doctoral' %}
  <li>
  {% if person.link %}
  <a href="{{ person.link }}">{{ person.title }}</a>
  {% else %}
  {{ person.title }}
  {% endif %}
  </li>
  {% endif %}
{% endfor %}
</ul>

<hr>

## Project Manager

{% for person in people %}
  {% if person.role == 'project-manager' %}
  {% if person.link %}
  <a href="{{ person.link }}">{{ person.title }}</a>
  {% else %}
  {{ person.title }}
  {% endif %}
  {% endif %}
{% endfor %}

<hr>

## Doctoral Students

<ul class="ulist-html">
{% for person in people %}
  {% if person.role == 'doctoral' %}
  <li>
  {% if person.link %}
  <a href="{{ person.link }}">{{ person.title }}</a>
  {% else %}
  {{ person.title }}
  {% endif %}
  </li>
  {% endif %}
{% endfor %}
</ul>

<hr>

## Masters Students

<ul class="ulist-html">
{% for person in people %}
  {% if person.role == 'masters' %}
    <li>
      {% if person.link %}
        <a href="{{ person.link }}">{{ person.title }}</a>
      {% else %}
        {{ person.title }}
      {% endif %}
    </li>
  {% endif %}
{% endfor %}
</ul>

<hr>

## Lab Members

<ul class="ulist-html">
{% for person in people %}
  {% if person.role == 'lab-member' %}
    <li>
      {% if person.link %}
        <a href="{{ person.link }}">{{ person.title }}</a>
      {% else %}
        {{ person.title }}
      {% endif %}
    </li>
  {% endif %}
{% endfor %}
</ul>

<hr>

## Alumni

<ul class="ulist-html">
{% for person in people %}
  {% if person.role == 'alumni' %}
  <li>

  {% if person.link %}
  <a href="{{ person.link }}">{{ person.title }}</a>
  {% else %}
  {{ person.title }}
  {% endif %}{% if person.degree %} ({{ person.degree }}){% endif %}{% if person.affiliation %}: {{ person.affiliation }}{% endif %}

  </li>
  {% endif %}
{% endfor %}
</ul>

---
layout: page
title: Lab Members
tab: Lab_Members
---
<br>
{% assign pi = site.lab_members | where:"category","Principal" %}
<h3 class="people-title"> Principal Investigator </h3>
<ul class="member-list">
{% for member in pi %}
  <li><a href='{{ member.url }}'>{{ member.title }}</a><a href='{{ member.url }}'><img class="member_photo_list" src="{{ site.baseurl }}/assets/lab_members/thumbnail/{{ member.photo }}" /></a></li>
{% endfor %}
</ul>
{% assign manager = site.lab_members | where:"category","Manager" %}
<h3 class="people-title"> Project Manager </h3>
<ul class="member-list">
{% for member in manager %}
  <li><a href='{{ member.url }}'>{{ member.title }}</a><a href='{{ member.url }}'><img class="member_photo_list" src="{{ site.baseurl }}/assets/lab_members/thumbnail/{{ member.photo }}" /></a></li>
{% endfor %}

<!-- we have no postdocs right now -->
<!-- </ul>
{% assign postdoc = site.lab_members | where:"category","Postdoc" %}
<h3 class="people-title"> Postdoctoral Researchers </h3>
<ul class="member-list">
{% for member in postdoc %}
  <li><a href='{{ member.url }}'>{{ member.title }}</a><a href='{{ member.url }}'><img class="member_photo_list" src="{{ site.baseurl }}/assets/lab_members/thumbnail/{{ member.photo }}" /></a></li>
{% endfor %}
</ul> -->
{% assign phd = site.lab_members | where:"category","PhD" %}
<h3 class="people-title"> PhD </h3>
<ul class="member-list">
{% for member in phd %}
  <li><a href='{{ member.url }}'>{{ member.title }}</a><a href='{{ member.url }}'><img class="member_photo_list" src="{{ site.baseurl }}/assets/lab_members/thumbnail/{{ member.photo }}" /></a></li>
{% endfor %}
</ul>
{% assign masters = site.lab_members | where:"category","Masters" %}
<h3 class="people-title"> Masters </h3>
<ul class="member-list">
{% for member in masters %}
  <li><a href='{{ member.url }}'>{{ member.title }}</a><a href='{{ member.url }}'><img class="member_photo_list" src="{{ site.baseurl }}/assets/lab_members/thumbnail/{{ member.photo }}" /></a></li>
{% endfor %}
</ul>
{% assign undergrad = site.lab_members | where:"category","Undergraduate" %}
<h3 class="people-title"> Undergraduate </h3>
<ul class="member-list">
{% for member in undergrad %}
  <li><a href='{{ member.url }}'>{{ member.title }}</a><a href='{{ member.url }}'><img class="member_photo_list" src="{{ site.baseurl }}/assets/lab_members/thumbnail/{{ member.photo }}" /></a></li>
{% endfor %}
</ul>
{% assign alumni = site.lab_members | where:"category","Alumni" %}
<h3 class="people-title"> Alumni </h3> See past group photos <a href="https://ddmal.music.mcgill.ca/people/">here</a>
<ul class="member-list">
{% for member in alumni %}
  <li><a href='{{ member.url }}'>{{ member.title }}</a><a href='{{ member.url }}'><img class="member_photo_list" src="{{ site.baseurl }}/assets/lab_members/thumbnail/{{ member.photo }}" /></a></li>
{% endfor %}
</ul>

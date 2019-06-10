---
layout: page
title: Neon2
tab: Software
permalink: /software/neon/
---

Neon2 is a browser-based music notation editor written in JavaScript, designed for working with square notation. It uses [Verovio](http://www.verovio.org/index.xhtml) to dynamically render the symbolic music files in MEI format, updating the file in real time through a graphical interface. Neon2 can be used for creating new musical scores, making ground-truth data for machine learning, or for correcting errors from automated transcriptions in an OMR workflow. Neon2 is designed as part of an optical music recognition workflow, allowing for quick and easy correction of pitch and position errors created in the OMR process. Every component of our OMR process is designed as an accessible online application, to allow correction tasks to be crowdsourced from our partner organizations and community members.  
<br>

## Demo

You can try out Neon2 on our [demo page](https://ddmal.github.io/Neon2/). You can begin by selecting a link to a musical document that has undergone OMR, and then continue to insert, delete, or pitch shift notes on the page.  
<br>

## Source Code

Source code is available on the [Neon2 Github](https://github.com/DDMAL/Neon2).  
<br>

## Documentation

Installation and instructions are available on the [Neon2 Wiki page](https://github.com/DDMAL/Neon2/wiki).  
<br>

## Contributing Code

Any contributions are welcome! The easiest way to submit code is:

1. Create a fork of the [Neon2 Github repository](https://github.com/DDMAL/Neon2)
2. Read through the documentation and familiarize yourself with the code. Look at same of the outstanding [issues and feature requests](https://github.com/DDMAL/Neon2/issues) if you need some inspiration.
3. Change code as you please in your local repository.
4. When you're ready, send us a pull request. We'll look through your code, and then merge it in.  
<br>

## Feedback

If you have any comments please [let us know](emily.hopkins@mcgill.ca). If you would like to see a particular feature implemented, post a new [issue](https://github.com/DDMAL/Neon2/issues) on the Neon2 Github.  
<br>

## Developers    

Neon2 is developed by:

{% assign people = site.people | sort: 'last_name' %}

<ul class="ulist-html">
{% for person in people %}
  {% if person.neon == 'developer' %}
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

Project managers:

<ul class="ulist-html">
{% for person in people %}
  {% if person.neon == 'project-manager' %}
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

<br>

## Sponsors

Neon2 is an ongoing project at the [Distributed Digital Music Archives and Libraries Lab (DDMAL)]({{ site.url }}/), at the [Schulich School of Music](http://www.mcgill.ca/music) of [McGill University](http://www.mcgill.ca/). Neon2 is part of the larger [Single Interface for Music Score Searching and Analysis (SIMSSA)](http://simssa.ca/) project that is generously funded by the [Social Sciences and Humanities Research Council of Canada](http://www.sshrc-crsh.gc.ca/). We're also grateful for the support provided by the [Centre for Interdisciplinary Research in Music Media and Technology (CIRMMT)](http://www.cirmmt.mcgill.ca/).

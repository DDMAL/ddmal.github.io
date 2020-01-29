---
layout: page
title: Search the Liber Usualis
tab: Research
permalink: /research/omr/Search_the_Liber_Usualis/
redirect_from:
  - /research/omr/search_the_liber_usualis
  - /research/omr/search_the_liber_usualis/
---

The Liber Usualis is a valuable resource for musical scholars. As a compendium of the most common chants used by the Catholic Church, it is useful for identifying the origins of chants used in polyphonic compositions.

Using Optical Music Recognition and Optical Text Recognition, we have processed a scanned version of the Liber and made its contents searchable. This is a proof-of-concept demonstration for the larger task of providing search capabilities for all digitized musical works.

[The search interface is available online](http://liber.simssa.ca/).

This work was done as part of the [SIMSSA](https://simssa.ca/) project.
<br>

## Searching Help

We think that this demonstration will be useful for chant and musical scholars, so we have made it available online. Our current interface provides the following methods of content search:

* Neume names: Search by sequences of neume names, e.g., "torculus torculus punctum scandicus"
* Strict pitch sequence: Untransposed pitch sequences, e.g., "edcdeee", "fgagfde", "cbcbcbc".
* Transposed pitch sequence: Same as strict, but will match pitch sequences diatonically.
* Contour: The "Parsons code": u(p), d(own), and r(epeat), e.g., "uuddrrd".
* Intervals: Number of semitones +/-, e.g., "+2 +2 +3 -1 -1 +2".
* Text: OCR'ed text results, e.g., "alleluia", "pastor". Note: The OCR results are very poor.

Search results will be highlighted on the original page images below the search box. You can use the "next" and "previous" buttons to step through the results.

The current search supports sequences up to a length of 10 for all musical queries. Note that this means that for the pitch sequences this is a length of 10, but for the contour and intervals it is a maximum length of 9.

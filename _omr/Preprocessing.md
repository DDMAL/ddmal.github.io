---
layout: page
title: Preprocessing
tab: Research
permalink: /omr/gemm/:title/
---

With early documents, pre-processing is a crucial phase since they are in most cases highly degraded. Further more, music manuscripts are by definition unique, so it is impossible to choose the best copy for our task. It is very often the same with early prints because few complete copies survive.

One major difficulty in developing a pre-processing solution to enable optical recognition of early documents is related to the fact that the types of degradation are numerous and may vary from one source to another. For example, we may have to deal with:


* printing or writing imperfections
* bad or patchy absorption of ink
* bleed-through (elements of the verso appearing on the page)
* paper degradations (yellowing)
* stains (very often moisture)
* tears or even holes

As optical recognition is based on digital images, the distortions that may appear during the digitization phase must also be taken into account. Furthermore, working with microfilms introduces more steps into the acquisition phase which is strictly speaking not limited to the digitization. The document has to be photographed, page by page, and then a microfilm is built from the photographs. Only then can it be scanned using the microfilm scanner. Each step is liable to add new distortions and more degradation. In our research, we have the additional problem that the steps before digitization are out of our control and we cannot optimize the acquisition phase for our task. Very often, the images obtained by scanning microfilms are not optimized at all, because digitization and optical recognition were not the purpose for which the microfilms were produced. A large number of the microfilms kept in libraries were made years ago, in the Sixties for some of them. The consequence for our research is that we have to deal with distortions such as:


* skewness of the document on the image
* curvature of the document on the image (because the page was not flat)
* non-uniform illumination (during photo capture)
* heterogeneous borders around the page

Consequently, the pre-processing approach must be effective because it is a sine qua non condition to building a real-world application. The diversity of the problem also implies that the approach must be highly adaptive.

## Progress reports


* Adaptive binarisation. (Started August 2005)
* Preliminary experiments (Cory McKay)
    * [Bleed-through removal](http://www.music.mcgill.ca/~cmckay/software/musictech/ScoreReader/BleedThroughRemoval.html) (September 2004)
    * [Red staffline detection](http://www.music.mcgill.ca/~cmckay/software/musictech/ScoreReader/HorizontalLineDetection.html) (August 2004)

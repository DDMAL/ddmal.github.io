---
layout: page
title: Digitization of 16th Century Music Prints
tab: Research
permalink: /research/omr/gemm/microfilms_and_scanning/Digitization_of_16th_century_music_prints/
---

For our experiments, we selected a first set of microfilms of 18 music prints of the 16th century held at the [Marvin Duchow Music Library at McGill](https://www.mcgill.ca/library/branches/music/about). They were scanned in grayscale at a resolution of 400 dpi and following the guidelines set-up for the [Marenzio project at Harvard](http://www.marenzio.org/). The microfilms scanned correspond to a total of about 1800 images. In some cases, the images contain more than one page (two or four more to be precise). In these cases, the resolution was increased to 600 dpi.

To be processed, the images with more than one page per image have to be split. We may legitimately think that, with an automatic solution to split the images, we may save time since digitization time is reduced by 2 or 4 if we ignore the time needed to manipulate the microfilms and the image files. A python script was implemented to do this task. In practice, we noticed that it may become quite complicated regarding the page ordering and the repartition of the pages in the partbooks if the print is in partbooks. The main reasons are :

* The position of the pages in the microfilm is not systematic (sometimes, the first pages are at the bottom, sometimes at the top).
* Some pages may be duplicated in the microfilm, most often because one part ends on the image and another starts on the same image. But this is not systematic either.
* Very often, several prints or several parts of the same print were bound together. In these cases, it is even more difficult to find where one print (or one part) ends and the other starts.

The qualifications needed to do the digitization should not be underestimated. In particular we noticed that, in several cases, a good knowledge of the printing techniques of the time is necessary to figure out how the books or partbooks are organized. In the most enigmatic situations, to figure out the page order and repartition, it may be necessary to look at the collation letters, at the gatherings, or even at the bleed-through. Furthermore, wrong decisions taken during digitization and badly organized image files may make it necessary to consult the microfilm in order to reorganize the files correctly.

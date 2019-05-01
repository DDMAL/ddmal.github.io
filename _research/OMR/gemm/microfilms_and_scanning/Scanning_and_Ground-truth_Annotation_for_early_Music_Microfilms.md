---
layout: page
title: Scanning and Ground-truth Annotation for early Music Microfilms
tab: Research
---

Throughout the summer of 2006, we attempted to scan prints from a variety of printers from microfilms held at the Marvin Duchow Music Library at McGill University. Two master's students were trained to use the microfilm scanner and to correct the output of the optical music recognition process with Aruspix. As a gauge for future researchers who might undertake such a project, we present here some statistics on the time it took to build this set of ground truth.

The figure to the left plots the scanning times for 33 prints against the number of scans taken for each print. Some microfilms allow 2-up or 4-up scanning, thereby doubling or quadrupling the number of pages obtained per scan. Our data show no significant learning curve for this task, simply an overhead time for each film (e.g, obtaining and loading the film or transferring files to the server) of about 9 minutes and a scanning time of about 26 seconds per scan:

```
centerscanning time = 8.823 + 0.4341 times; number of scans/center
```

The next figure illustrates the average time per page our annotator needed to correct the output of the recognition process, plotted against the total time she had spent at the annotation task. Under all of a variety of models, the Box-Cox procedure suggested that her annotation time per page was inversely proportional to her cumulative annotation time. Although the effect of different prints on scanning time was highly significant, it is a difficult variable to use for predicting future performance on unknown prints; we present a simple average trend line above, fitted over all prints:

```
centerannotation time per page = 1 / (0.06567 + 0.00003731 times; cumulative annotation time)/center
```

Although it is dangerous to extrapolate too far beyond the range of the data (e.g., the model would predict only 13 seconds of annotation time per page after 2000 hours, or a year of full-time work), within the range, we see a believeable learning curve beginning at 15 minutes per page, dropping to 9.1 minutes per page after 20 hours of work, and ending at 5.0 minutes per page after 60 hours of work.

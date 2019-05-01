---
layout: page
title: The SALAMI Annotation Data
tab: Research
---

This page contains the most up-to-date information about the SALAMI Annotation Data. All of the data here are free to download and use.

<br>  

### Annotation Data

Please visit our [Github page](https://github.com/DDMAL/salami-data-public) for the most up-to-date version of the data. The annotations used to be offered here as versioned zipfiles, but were migrated to Github in 2015. Here is a list of versions:


* [Latest version (Github)](https://github.com/DDMAL/salami-data-public)
* [SALAMI_data_v1.2](hold) <!-- /datasets/salami/SALAMI_data_v1.2.zip -->
* [SALAMI_data_v1.1](hold) <!-- // /datasets/salami/SALAMI_data_v1.1.zip -->
* [SALAMI_data_v1.0](hold) <!-- /datasets/salami/SALAMI_data_v1.0.zip -->

<br>  

### Feature Data

We have compiled features published by The Echo Nest for the SALAMI data. These features are estimated by The Echo Nest, and include tatum/beat/bar/section times, global features such as time signature, tempo, key and mode, and metadata. The metadata may be especially useful to researchers hoping to purchase the music.

* [echonest_features.zip](hold) <!-- /datasets/salami/echonest_features.zip -->

If you would like to obtain other features for the music in SALAMI, just let us know and we can hopefully add it to this list. The features should be non-invertible, of course!

<br>  

### Utilities

There is a SALAMI section at the [DDMAL GitHub page](https://github.com/DDMAL/SALAMI) that contains some useful files. Among them:

* A [python script](https://github.com/DDMAL/SALAMI/blob/master/SALAMI_download.py), written and donated by [Oriol Nieto](http://steinhardt.nyu.edu/marl/people/nieto), to download all the SALAMI audio files that come from the Internet Archive. Provided without warranty, but works like a charm!
* A [parser](https://github.com/DDMAL/SALAMI/blob/master/get_sections_sept_2012.rb), written in Ruby, that was used to generate the parsed annotations new to version 1.2 (as well as a  [shell script](https://github.com/DDMAL/SALAMI/blob/master/parse_annotations_shell.rb) to run it on all the files).
* A MATLAB function '[annotation_getfile.m](https://github.com/DDMAL/SALAMI/blob/master/annotation_getfile.m)' that reads annotation files into matrices.

Hopefully you'll find all these resources have enough comments that you can modify and adapt the code easily.


_All of these files are provided as is, without guarantee. They are separate from the official SALAMI release and thus are not public domain, but you have permission to use them. If you have any handy tools you've developed to manage the SALAMI data, you're welcome to share here too! If enough resources accumulate, we'll devote a separate page to them._

<br>  

### More information about the annotations

This data set contains about half of the total data we collected. For the benefit of the community, the other half will remain secret for now, though it may be used as a test set for MIREX.
We are dedicating this data to the public domain through this [Creative Commons "license."](http://creativecommons.org/publicdomain/zero/1.0/) Follow the link for more information about the license, but, briefly put: this license, CC0, effectively frees users from all obligations regarding attribution, derivative works, and reuse. However, we kindly ask that when using the data you cite the [ISMIR paper describing its creation](http://music.mcgill.ca/~jordan/salami/SALAMI_ISMIR_2011.pdf).

> Jordan B. L. Smith, J. Ashley Burgoyne, Ichiro Fujinaga, David De Roure, and J. Stephen Downie. 2011. Design and creation of a large-scale database of structural annotations. In <em>Proceedings of the International Society for Music Information Retrieval Conference, Miami, FL, 555–60.

Like any set of human-generated data, this data set contains some typos and other formatting errors, so please be aware. Updates to the database correcting these errors will follow; so will parsed versions of each file that separate the different layers of the annotations into different files.

Information about the license, the data and more is contained in the ReadMe file that accompanies the data. A spreadsheet giving metadata about the annotations is also provided. You may also wish to read the [Annotator's Guide](http://music.mcgill.ca/~jordan/salami/SALAMI-Annotator-Guide.pdf) to better understand the annotation format. If you have any questions about the data, don't hesitate to write to [Jordan](mailto:jordan.smith2@mail.mcgill.ca), the contact author on the ISMIR paper.

Last, and certainly not least, we offer our thanks to the many annotators who toiled to create this database: Christa Emerson, David Adamcyk, Elizabeth Llewellyn, Meghan Goodchild, Michel Vallières, Mikaela Miller, Parker Bert, Rona Nadler, and Rémy Bélanger de Beauport. Without their hard work and dedication, this project would have been, well, a lot smaller. We also thank Andreas Ehmann, David Bretherton, Gabriel Vigliensoni, Jessica Thompson, Mert Bay, Reiko Yamada, and William Carroll, who each played a vital role in the execution of the project.

We also acknowledge the financial support of a Digging into Data Challenge grant, the Social Sciences and Humanities Research Council of Canada, JISC, and the National Science Foundation.

So please, go ahead and download the data! We look forward to seeing what comes next.

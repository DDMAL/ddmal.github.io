---
layout: page
title: Gamut for Early Music on Microfilms (GEMM)
tab: Research
---
<br>

## Introduction

Unlike text databases, online content-searchable databases of music scores are extremely rare. The main reasons are the cost of digitisation, the inaccessibility of original music scores and manuscripts, and the lack of sophisticated music recognition software. The proposed research will attempt to circumvent these problems by investigating the feasibility of using existing microfilms for digitisation.

Compared to original scores, microfilms constitute more accessible and economical sources for digitisation (there are over 7000 music scores in microfilm format in North America). Scanned images of music scores can be made content searchable through the use of optical music recognition (OMR) softwares. The OMR system to be used and developed here will be based on two of the most advanced existing OMR technologies, namely, Gamut (Fujinaga 1997) and Aruspix (Pugin 2006), both developed by researchers involved in this project.

The objective of this study is to determine whether the quality of images scanned from microfilm, rather than from the original score, is sufficient for the subsequent OMR process. If the digital image derived from microfilm is found to be acceptable for OMR, there will be tremendous economic benefits. The cost of building digital libraries is incurred mainly in the digitisation process. The cost of digitisation from microfilm is far lower than that from paper. Using microfilms may also prove highly advantageous in data collection. Original music manuscripts are scattered throughout the world in various libraries, museums, and archives. The exorbitant cost of travelling to these locations can be avoided through the use of microfilm collections that already exist in many music libraries. Finally, when a local archive decides to digitise its own collection, using available microfilms will obviate the necessity of handling and thereby potentially damaging precious manuscripts.

The project will concentrate on music from Medieval and Renaissance periods, because access to original sources from these periods is particularly difficult and the softwares must be trained to recognise notation systems that differ from the common music notation system in current use. If the quality of images scanned from microfilm is sufficient to obtain reasonable results using the OMR process, a large amount of music can be made searchable, creating an incredible resource for music scholars throughout the world.  
<br>

## Microfilms and Scanning

The microfilms of Early Music are the raw material for this research. The starting point was to select samples of sources and digitize them using a microfilm scanner (Minolta MS6000) with grayscale option. Different notation styles with varying degrees of print quality have been considered. As a general policy, a 'backwards' procedure was adopted, starting with sources printed around 1600 and then moving by steps to earlier and earlier documents, including manuscripts. During this project, we will study the feasibility of using microfilm by comparing the image quality of direct scans and microfilm scans of the same music scores where they are available in both formats. A high-quality flatbed scanner (Epson 1640XL) will be used for the experiment. The principal metric is the recognition rate of the OMR process, although visual inspection of the image may be sufficient in some cases.

[[more]({{ site.baseurl }}/omr/gemm/Microfilms_and_Scanning/)]  
<br>

## Preprocessing

One part of the current research is devoted to development and evaluation of pre-processing solutions. Standard approaches to pre-processing of degraded documents are considered, as well as approaches more specific to music such as staff detection (Fujinaga 2005). A particular attention is given to binarisation because it appears to be a critical step in OMR of early documents. For our preprocessing experiments, we use a framework for the creation of structured document analysis applications by domain experts called [Gamera](http://ldp.library.jhu.edu/projects/gamera/) (MacMillan, Droettboom, and Fujinaga. 2002). Gamera has been used in another OMR research project, the [Levy Sheet Music Project](http://levysheetmusic.mse.jhu.edu/) at the [Johns Hopkins University](http://jhu.edu/)
(Choudhury et al. 2001). The framework is also being further developed within the current research project, as the new techniques that have been developed (such as binarization algorithms) are being integrated into it.

[[more]({{ site.baseurl }}/omr/gemm/Preprocessing/)]  
<br>

## OMR Experiments

For our OMR experiments, we use mainly [Aruspix](http://www.aruspix.net/), a software application designed to perform optical recognition of early typographic music prints. It uses an innovative technique in OMR based on Hidden Markov Models and was developed initially as part of a PhD thesis in Musicology presented by Laurent Pugin at [Geneva University](http://www.unige.ch/) (Pugin 2006). Within the current project, Aruspix is used as a research tool. It it used to perform evaluations (such as pre-processing evaluations), but it is also being developed further. The new scores considered in the present research and the data generated (mainly the ground-truth) enable a better evaluation of Aruspix itself and, hopefully, future improvments.  
<br>

## Academic Advisory Board

* [Julie Cumming](http://www.mcgill.ca/music/about-us/bio/julie-e-cumming) • McGill University
* [Emma Dillon](http://www.kcl.ac.uk/artshums/depts/music/people/acad/dillon/index.aspx) • King's College London
* [Thomas Forrest Kelly](http://medieval.fas.harvard.edu/people/thomas-forrest-kelly) • Harvard University
* [Dolores Pesce](http://music.wustl.edu/people/pesce) • Washington University in St. Louis
* [Susan Forscher Weiss](http://www.peabody.jhu.edu/conservatory/faculty/Musicology/weiss/) • Johns Hopkins University  
<br>

## Researchers

* John Ashley Burgoyne • McGill University
* Remi Chiu • McGill University
* [Ichiro Fujinaga](http://www.music.mcgill.ca/~ich/) • McGill University
* [Cory McKay](http://www.music.mcgill.ca/~cmckay/) • McGill University
* Laurent Pugin • McGill University  
<br>

## Grants

The project is funded by SSHRC Research Grants:  

* 'Feasibility of Digitizing Early Music on Microfilms for the Creation of Large-scale Content-Searchable Databases' (Standard Research Grant; August 2005; $145,838).
* 'Enhancing optical music recognition technology of Early Music prints and manuscripts for musicological applications' (Image, Text, Sound and Technology Grant; December 2006; $49,943).  

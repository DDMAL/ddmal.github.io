---
layout: research_post
title: Automatic Music Classification
permalink: /research/:title/
---

## jMIR

[jMIR](http://jmir.sourceforge.net/) is an open-source software suite implemented in Java for use in music information retrieval (MIR) research. It can be used to study music in both audio and symbolic formats as well as mine cultural information from the web and manage music collections. jMIR includes software for extracting features, applying machine learning algorithms and analyzing metadata.

The primary emphasis of jMIR is on providing software for general research in automatic music classification and similarity analysis. The main goals of the project are as follows:


* Make sophisticated pattern recognition technologies accessible to music researchers with both technical and non-technical backgrounds.
* Eliminate redundant duplication of effort.
* Increase cooperation and communication between research groups.
* Facilitate iterative development and sharing of new MIR technologies.
* Facilitate objective comparisons of algorithms.
* Facilitate research combining high-level, low-level and cultural musical features (i.e. symbolic, audio and web-mined features).

In order to meet these goals, all aspects of jMIR are open source and distributed free undr a GNU General Public License. The software is well-documented and include GUIs in order to increase general usability. A special emphasis has been placed on software architectures that facilitate extensibility for those technically inclined users who wish to modify or add to the software.

jMIR was funded by a grant from the [Social Sciences and Humanities Research Council of Canada](http://www.sshrc-crsh.gc.ca/home-accueil-eng.aspx).

Each of the components comprising the jMIR software suite may be used entirely separately or as an integrated whole. The components communicate with each other using files in either ACE XML or Weka ARFF formats. The components are as follows:  
<br>

### Standardized File Format

* [ACE XML](http://jmir.sourceforge.net/index_ACE_XML.html): A standardized set of file formats for representing feature values, feature metadata, instance labels and class ontologies. Work on new and significantly extended ACE XML 2.0 versions of these file formats is also ongoing. More details are available on the [ACE XML Development Page](http://www.music.mcgill.ca/~cmckay/NEMA/ACE_XML_Dev_Page.html).  
<br>

### Data Mining and Machine Learning

* [ACE](http://jmir.sourceforge.net/index_ACE.html): Pattern recognition software that utilizes meta-learning. Evaluates, trains and uses a variety of classifiers, classifier ensembles and dimensionality reduction algorithms based on the needs of each particular research problem.  
<br>

### Feature Extraction

* [jAudio](http://jmir.sourceforge.net/index_jAudio.html): Software for extracting low and high-level features from audio recordings.
* [jSymbolic](http://jmir.sourceforge.net/index_jSymbolic.html): Software for extracting high-level features from MIDI recordings.
* [jWebMiner](http://jmir.sourceforge.net/index_jWebMiner.html): Software for extracting cultural features from web text.  
<br>

### Data and Metadata

* [jMusicMetaManager](http://jmir.sourceforge.net/index_jMusicMetaManager.html): Software for profiling music collections and detecting metadata errors and redundancies.
* [Codaich](http://jmir.sourceforge.net/index_Codaich.html): A labeled database of MP3s for training, testing and evaluating MIR systems.  
<br>

### Legacy

* [Bodhidharma](http://jmir.sourceforge.net/index_Bodhidharma.html): MIREX 2005-winning software for classifying MIDI recordings by genre. The ancestor of ACE and jSymbolic.  
<br>

## NEMA

The [Networked Environment for Music Analysis (NEMA)](http://www.music-ir.org/?q=nema%2Foverview) project is a multinational and multidisciplinary cyber-infrastructure project for music information processing that builds upon and extends the music information retrieval research being conducted by the International Music Information Retrieval Systems Evaluation Laboratory (IMIRSEL) at the University of Illinois at Urbana-Champaign (UIUC). NEMA brings together the collective projects and the associated tools of six world leaders in the domains of music information retrieval (MIR), computational musicology (CM) and e-humanities research. The NEMA team aims to create an open and extensible web services-based resource framework that facilitates the integration of music data and analytic/evaluative tools that can be used by the global MIR and CM research and education communities on a basis independent of time or location. To help achieve this goal, the NEMA team will be working co-operatively with the UIUC-based and Mellon-funded [Software Environment for the Advancement of Scholarly Research (SEASR)](http://seasr.org/) project to exploit SEASR's expertise and technologies in the domains of data mining and web services-based resource framework development.

The NEMA work at McGill is currently focused on expanding the [ACE XML file formats](http://www.music.mcgill.ca/~cmckay/NEMA/ACE_XML_Dev_Page.html) and developing software tools for parsing, writing and processing them, but [jMIR](http://jmir.sourceforge.net/) tools in general are being adapted for the project as well.

NEMA is being funded through a generous grant from the [Scholarly Communications program](https://mellon.org/programs/scholarly-communications/) of the [Andrew W. Mellon Foundation](http://www.mellon.org/).  
<br>

### Related Publications

Available at [Cory McKay's publication page](http://www.music.mcgill.ca/~cmckay/projects.html).  
<br>

### Advisor

[Ichiro Fujinaga](http://www.music.mcgill.ca/~ich/)  
<br>

### Graduate Students

* [Cory McKay](http://www.music.mcgill.ca/~cmckay/)
* John Ashley Burgoyne  
<br>

### Undergraduate Students

* Jessica Thompson  
<br>

### Links

* [jMIR](http://jmir.sourceforge.net/)
* [NEMA](http://www.music-ir.org/?q=nema%2Foverview)
* [NEMA Wiki](http://nema.lis.uiuc.edu/wiki/index.php/Main_Page)
* [NEMA@McGill](http://www.music.mcgill.ca/~cmckay/NEMA/NEMA.html)
* [ACE XML Development Page](http://www.music.mcgill.ca/~cmckay/NEMA/ACE_XML_Dev_Page.html)
* [ACE XML Discussion Page](http://nema.lis.uiuc.edu/wiki/index.php/AXv2RDF)

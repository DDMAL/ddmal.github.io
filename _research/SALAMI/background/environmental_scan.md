---
layout: page
title: Environmental Scan
tab: Research
---

Over the last decade, several approaches to automatically detect the structure of audio music data have been developed. One of the earliest papers on the subject was Foote (1999) who used mel-frequency cepstral coefficients (MFCC) as features and introduced the concept of similarity matrices. Logan and Chu (2000), who also used MFCC as features, experimented with hidden Markov models (HMM) and clustering methods to find the most repeating sections of 18 Beatles songs (see also Aucouturier and Sandler (2001) and Chai and Vercoe (2003)). Similarity matrices were also used by others such as Peeters et al. (2002). Chroma-based techniques were introduced by Bartch and Wakefield (2001) and used successfully by many others including Goto (2003) and Dannenberg and Hu (2002) who also described several general strategies for segmentation robust to small local tempo variations. Lu et al. (2004) concentrated on finding melodic similarity rather than timbre similarity thus making it robust to change in instrumentation. They also tried to find the complete overall structure of the music rather than just finding verse or chorus. A recent paper by Paulus and Klapuri (2008) improves the analysis by concentrating on extracting various audio features, such as MFCC and chroma vectors, based on the position of the beats.

As one can see, there are many structural analysis algorithms available. Because these aforementioned algorithms were originally developed and tested primarily on Western popular music (mostly Beatles songs), e.g., Levy et al. (2006) and Maddage (2006), SALAMI will need to systematically evaluate the effectiveness these techniques to ascertain their performance characteristics on our much more diverse music collections. SALAMI's evaluation of these techniques will contribute to the MIR and CM communities' knowledge about which algorithms are best suited for which particular types of music.

As mentioned previously, SALAMI will be using and enhancing several open-source visualization software systems, namely, Variations Timeliner, Sonic Visualiser, and Audacity. Both Sonic Visualiser and Audacity have vibrant development communities that have created some rudimentary mechanisms to overlay simple structural markers over the music audio. However, neither system currently provides the sophisticated visualisations required by SALAMI. That is, they do not have mechanisms that allow for the visualisation of structural hierarchies nor the simultaneous overlaying of multiple structural views based on different musical facets (e.g., harmony, timbre, rhythm, etc.). While the Variations Timeliner does provide hierarchical visualisations, it also currently lacks the ability to overlay multiple structural views.

There are many suites of low-level feature extractors available, e.g., Marsyas, [[1]](http://sourceforge.net/projects/marsyas/) Sonic Visualiser VAMP plug-ins, and CLAM. [[2]](http://clam-project.org/) MIREX has shown that they all provide similar functionality. SALAMI has chosen jAudio [[3]](http://sourceforge.net/projects/jaudio/) as its feature extractor because it is one of the most comprehensive, it is extensible, and it has already been implemented as part of the NEMA architecture.

<hr>  

1.  See <http://sourceforge.net/projects/marsyas/>.

2.  See <http://clam-project.org/>.

3.  See <http://sourceforge.net/projects/jaudio/>. See Appendix A: Fig. 6 for a screenshot.

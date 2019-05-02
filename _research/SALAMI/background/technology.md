---
layout: page
title: Technology and Work Plan
tab: Research
---

SALAMI's research and development will be conducted using the NEMA infrastructure. NEMA is currently being constructed and will be well tested by the end of 2009\. It will, therefore, be ready to process the large set of data for the SALAMI project. SALAMI will be built and run within the NEMA technological framework principally because we are convinced of the benefits provided by its underlying Meandre dataflow engine. These benefits include:

1.  Meandre code (along with the NEMA code) is open source allowing for unlimited community development and participation;
2.  Meandre is written in Java for platform independence;
3.  Meandre is designed to simplify the running of large-scale data mining/analysis applications on high-performance computing clusters;
4.  Meandre itself is constructed as a Webservice framework which makes the creation of globally available Webservice resources based upon Meandre flow executions quite simple;
5.  Meandre versions of NEMA's M2K and jMIR music processing and machine learning applications have already been developed and successfully tested; and,
6.  Meandre itself stores the operational data of each session run as RDF information, making it easier to acquire and integrate the provenance data needed for SALAMI's data and computational Webservices.

In order for SALAMI to properly evaluate candidate structural analysis algorithms and to train the machine-learning components of the algorithms, a large set of high-quality ground truth is required. McGill will be hiring music graduate students to create the ground truth data set using the open-source Sonic Visualiser, which allows quick labelling of audio data. We will be working with our NEMA partner, Queen Mary, who developed the software, to allow hierarchical labelling. Over the course of developing the structural analysis ontology we will also be working on translators to be used by the various visualization software packages mentioned previously.

After selecting the set of structural analysis algorithms which will be use to create the SALAMI analytical output, we will consult with the CM community to design our set of exemplar experiments that best demonstrate the potential of the SALAMI data and services.

To summarize, our development methodology (see Table 2 for the work plan) is based on the established practice of the partner groups and the NEMA project. We are committed to open-source community development, facilitated by adoption of open standards and publication of specifications. In addition to source code we will follow an open process to develop the modularized ontology. We will work closely with our end users and Advisory Board at all times to ensure successful codesign based on key use cases and user groups, and we will involve all stakeholders in the governance of the development process. We are uniquely positioned to build significantly on the experience of the UK's Open Middleware Infrastructure Institute and the JISC-funded ENGAGE programmme, a partnership with the UK's NGS (National Grid Service).

Table 2\. Work Plan

| Phases &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; | UIUC | McGill | Southampton |
|-----|---|---|---|
| I. 2010/1-3 | Complete survey of structural analysis (SA) algorithms | Refinement of the annotation software | Design ontology for music structure |
| II. 2010/4-6 | Implement various algorithms in Meandre | Selection of pieces for ground truth | Implement the ontology output interface to SA software |
| III. 2010/7-9 | Beta-testing of SA software and initial training of software | Creation of ground truth dataset | Survey of visualization software (VS) and their file formats |
| IV. 2010/10-12 | Training and main run of the SA software | Verification of the analysis by SA software | Implement translation between the ontology and the file formats |
| V. 2011/1-3 | Analysis of the SA software performance | Conduct sample experiments | Finalize the Webservice framework |

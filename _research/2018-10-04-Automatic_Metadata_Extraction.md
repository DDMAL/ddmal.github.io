---
layout: research_post
title: Workflow Management with Automatic Metadata Extraction
tab: Research
type: project
permalink: /research/:title/
---

As libraries convert materials into digital formats, the need for efficient workflow management tools will increase. The significant human labor required for editing, inspecting, correcting, and "tagging" (with appropriate metadata) digital objects might inhibit libraries and other organizations from initiating large-scale digitization efforts. By developing the framework of workflow management tools, semi-automated tools will reduce the resource requirements for implementing large-scale digitization projects and provide enhanced search functionality.

This research project will investigate developing an efficient and economical framework of tools to manage the workflow of large-scale digitization of musical materials. It aims to support the path from physical object and digitized material into a digital library repository by providing effective tools for perusing multimedia elements. The result of the process will include the audio files; both the images and the text of album covers, record labels, and liner notes; metadata about the recordings; images of scores and files in machine-readable format; and a database enabling the information to be searched and accessed via the web.

An important component of the research is to minimize human intervention by automatically generating text and metadata from the captured images using document analysis and recognition techniques. Metadata extraction constitutes a major source of cost in most digitization projects. In the case of vinyl records, the possible sources for the metadata are the record label, album cover, or liner notes. For printed music, the sources for the metadata may be the cover page and the title page. For music manuscripts, external sources may need to be consulted. The challenge lies in locating the appropriate information and extracting it from these different sources. Since the required data may appear anywhere, automatic extraction of the data necessitates the deployment of intelligent document analysis.

To implement the specialized document analysis required for this project, open-source software called [Gamera](http://gamera.informatik.hsnr.de/addons/ocr4gamera/index.html) (Droettboom et al. 2002) will be used. Gamera, developed by the applicant and others at the Johns Hopkins University over the last several years, is a toolkit for the creation of domain-specific structured document recognition applications by domain experts with limited programming experience. It allows a knowledgeable user to combine image processing and recognition tools in an easy-to-use, interactive, graphical scripting environment. The goal of the Gamera system is to leverage the user's knowledge of the target documents to create custom applications rather than attempting to meet the needs of diverse users through a monolithic application. The applications created by the user are suitable for use in a large-scale digitization project; they can be run in a batch-processing mode and easily integrated into a digitization framework. In order to create consistent names in the metadata, automated name authority control methodology developed at the Johns Hopkins University (DiLauro et al. 2001) will be added to Gamera. It is anticipated that this will also aid in the optical character recognition step, by providing a dictionary of names and their variants. The infrastructure will provide the sustained support needed for the continual development and the enhancement of Gamera software.  
<br>

## References

DiLauro, T., G. S. Choudhury, M. Patton, J. W. Warner, and E. W. Brown. 2001. Automated name authority control and enhanced searching in the Levy Collection. _D-Lib Magazine_ 7 (4).

Droettboom, M., K. MacMillan, I. Fujinaga, G. S. Choudhury, T. DiLauro, M. Patton, and T. Anderson. 2002. Using Gamera for the recognition of cultural heritage materials. _Proceedings of the Joint Conference on Digital Libraries_. 11–7.

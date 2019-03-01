---
layout: page
title: Libmei
tab: Software
permalink: /software/LibMEI/
---


LibMEI is a C++ library for reading and writing MEI files.  
<br>  

## Download

LibMEI is currently in Beta. Documentation and the latest source code is on [our GitHub repository](https://github.com/DDMAL/libmei).  
<br>  

## LibMEI Documentation

We have auto-generated [Doxygen documentation](https://github.com/DDMAL/libmei/blob/master/doc/libmei.doxygen).  
<br>  

## Compilation & usage

We provide an XCode project for OSX and a cmake script for Linux.  

To build on Linux, simply  

```
    mkdir build; cd build
    cmake ..
    make
    sudo make install
```

To use libmei, include

```
    #include <mei/mei.h>
```

More detailed information about compilation and use is available at the libmei wiki: [https://github.com/DDMAL/libmei/wiki](https://github.com/DDMAL/libmei/wiki)  
<br>

## Contributions

We welcome bug reports, feature requests, and patches to the libmei project page: [https://github.com/DDMAL/libmei](https://github.com/DDMAL/libmei)  
<br>

## Authors

* Andrew Hankinson
* Alastair Porter
* Greg Burlet
* Jamie Klassen
* Mahtab Ghamsari

Development of LibMEI was made available with funding from the Social Sciences and Humanities Research Council of Canada.  
<br>

## License

LibMEI is released under the MIT license.

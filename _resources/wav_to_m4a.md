---
layout: page
title: Compress a Directory of Wave files to M4A
tab: Resources
---

Takes a directory of wave files and compresses them to MPEG-4 Audio files.

Usage:

* python compress.py -d directory_of_wave_files -o output_directory
* Requires afconvert, , a utility included with the OS X Developer Tools
* /usr/local/bin/afconvert


```
from optparse import OptionParser
import os,sys,shutil
import tempfile
def main(dir, outdir):
    temp_dir = tempfile.mkdtemp()
    in_dir = os.walk(dir)
    for d in in_dir:
        # print d
        out_dirname = (os.path.basename(d[0]).replace("/", '-'))
        try:
        mkd = os.mkdir(os.path.join(temp_dir, out_dirname))
        print "Out: ", out_dirname, " "
        except OSError:
        print "Directory already exists. "
        # d is the directory object, files are a tuple at index 2
        wavfiles = [f for f in d[2] if os.path.splitext(f)[-1] == '.wav']
        for f in wavfiles:
            outfile = "%s.m4a" % (os.path.splitext(f)[0],)
            outfile = os.path.abspath(os.path.join(temp_dir, out_dirname, outfile))
            print "Outfile: ", outfile
            infile = "%s" % (os.path.join(d[0], f))
            print "Infile: ", infile
            cmd = '/usr/local/bin/afconvert -f m4af -d aac -b 256000 "%s" "%s"' % (infile, outfile)
            print "Compressing... ", cmd
            os.system(cmd)
    print "Outpath: ", os.path.abspath(os.path.join(outdir, out_dirname))
    shutil.move(temp_dir, os.path.abspath(outdir))
    return True

if __name__ == "__main__":
    parser = OptionParser()
    parser.add_option("-d", "--dir", help="The Directory to parse", action="store", type="string", dest="directory")
    parser.add_option("-o", "--output", help="The Director to output the files", action="store", type="string", dest="output")
    (options,args) = parser.parse_args()
    main(os.path.abspath(options.directory), os.path.abspath(options.output))
```

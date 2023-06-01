# [DDMAL](https://DDMAL.github.io/DDMAL-new-site)

This is the repository for the new DDMAL website distributed via GitHub Pages. It is a static website that has been modified to run without a CMS. The entirety of the site is stored in this repository, blog contents included. The formatting was adapted from the Lanyon theme, developed by Mark Otto.

To view the old version using Forestry CMS, consult the 'old-forestry-version' branch.

## Contents

- [Local Setup](#local-setup)
- [CMS](#cms)
  - [CMS Navigation](#cms-navigation)
  - [Organization](#organization)
  - [Media](#media)
- [Troubleshooting](#troubleshooting)

## Local Setup

### macOS / Windows Install

You will need to download a full [Ruby development environment](https://jekyllrb.com/docs/installation/) to install Jekyll. Follow steps 1 and 2 of [these instructions](https://jekyllrb.com/docs/) after installing Ruby. Note that mac users may need to install a package manager to configure the local Ruby version correctly, and [here](https://www.ruby-lang.org/en/documentation/installation/) is a link with instructions on how-to.

Assuming you have [Git](https://www.atlassian.com/git/tutorials/install-git) installed, open a terminal and clone the repository into any known location on your computer. The documents folder is recommended, though it is up to you.

### Configuration and building site locally

```
git clone https://github.com/DDMAL/ddmal.github.io.git
```

Enter the directory with `cd ddmal.github.io`, and pull from the repository to your local folder. Specifically, pull from the 'deforested' branch, the branch used by GitHub Pages to host the site.

```
git pull origin deforested
```

At this point, the site is able to be edited and run locally. Use the VSCode "Live Server" extension to view the static website in your browser and track changes automatically.

## Creating your lab member page

Create a new folder following the **firstname_lastname** convention under the appropriate subfolder (undergraduate, masters, etc.) in **lab_members**. Copy the template file from **TEMPLATES/lab_member_template** into your newly created folder (do not rename the file). Follow the TODO comments and fill in the desired information.

When adding an image for a lab member page, place it in the **assets/lab_members** directory. Reference the exact filename in the profile photo's `src` attribute in your **index.html** file.

You will also need to add a link to your new page in **lab_members/index.html**. Copy and paste a `<li>` item from the appropriate subsection in the appropriate alphabetical position. Make sure to update your name in the content and the path to your page. Add a thumnbail to the **assets/lab_members/thumbnail** folder and link it in the image `src`, or use the placeholder image. It should resemble this format (undergraduate used as an example here):

```
  <li><a href="../lab_members/undergraduate/first_last/">First Last</a><a href="../lab_members/undergraduate/first_last/"><img class="member_photo_list" src="../assets/lab_members/thumbnail/placeholder.png" /></a></li>
```

### Updating citations

There are two parts of this site updated from Zotero group libraries.
(OMR Bibliography and DDMAL)
https://www.zotero.org/groups/424851/omr_bibliography
https://www.zotero.org/groups/2415821/ddmal

The basic functionality is documented on the SIMSSA site here:
https://github.com/DDMAL/simssa.github.io#updating-citations-locally

This repo has two different versions of that script, one for general
DDMAL citation updates and one for the Zotero bibliography.

(Ideally someone will make a general-purpose parser that works for all
these scenarios but I didn't get to it -EH)

## Troubleshooting

If you are having any difficulties with setup or local development, please use the issues tab found in this repository.

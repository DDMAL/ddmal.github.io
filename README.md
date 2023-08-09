# [DDMAL](https://DDMAL.github.io/DDMAL-new-site)

This is the repository for the new DDMAL website distributed via GitHub Pages. It is a static website that has been modified to run without a CMS. The entirety of the site is stored in this repository, blog contents included. The formatting was adapted from the Lanyon theme, developed by Mark Otto.

To view the old version using Forestry CMS, consult the 'old-forestry-website' branch.

## Contents

- [Local Setup](#local-setup)
- [How to Create Lab Member Page](#creating-your-lab-member-page)
- [Troubleshooting](#troubleshooting)

## Local Setup

### macOS / Windows Install

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

Inside the DDMAL folder, there are four subfolders for _Media_, _Posters_, _Presentations_ and _Publications_ respectively.

To create an export, right click on any desired subfolder and select the option **Create Bibliography from Collection...**. At this point, make sure you have installed the _Chicago Manual of Style 17th edition_ inside the **Manage Styles...** popup. Then, set _Output Mode_ to Bibliography and Output Method to **Save as HTML**. Select ok, and name the file one of

```
DDMAL_< [media, posters, presentations, publications, omr] >.html
```
depending on which folder you are exporting. Then, save it inside the zotero_export/ folder within this directory.

_NOTE: make sure your generated HTML file contains all of the content you want displayed for the given page, old and new. Once the script is run, the existing page content will be replaced with the contents of your generated file, so include previous content you want to keep as well as any new modifications._

Next, run the `html_parser.py` script at the top level of this directory (works on Python 3.7, have not checked others). You will be prompted to input text based on which type of citations you would like to update, one of the three or all. The changes will be reflected in the `content.json` files in each of the specified folders, which are dynamically displayed in the static pages. Open any modified pages locally to ensure they display correctly before pushing to this repository.

_There is another GitHub Actions script called github_html_parser.py that was used in an attempt to automatically update the citation markdown files when zotero_export/ files are updated and pushed to the repo. It is currently deprecated._

## Troubleshooting

If you are having any difficulties with setup or local development, please use the issues tab found in this repository.

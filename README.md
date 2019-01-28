# [DDMAL](https://DDMAL.github.io/DDMAL-new-site)

This is the repository for the new DDMAL website distributed via GitHub Pages. It is a static website built using Jekyll, meaning that there is no backend presence, and the entirety of the site is stored in this repository, blog contents included. The formatting was adapted from the Lanyon theme, developed by Mark Otto.

## Contents

- [Local Setup](#setup)
- [CMS](#cms)

## Local Setup

You will need to download a full [Ruby development environment](https://jekyllrb.com/docs/installation/) to install Jekyll. Follow steps 1 and 2 of [these instructions](https://jekyllrb.com/docs/) after installing Ruby. 

Create a new directory and initialize an empty repository in it. This is assuming you have [Git](https://www.atlassian.com/git/tutorials/install-git) installed. 

```
mkdir <your_repo>
cd <your_repo>
git init
```

Set the remote repository to the url of the GitHub repository.

```
git remote add origin https://github.com/DDMAL/DDMAL-new-site.git
```

Pull from the repository to your local folder. Specifically, pull from the 'gh-pages' branch, the branch used by GitHub Pages to host the site. 

```
git pull origin gh-pages
```

By default, this will create one branch locally (master). Create a new local 'gh-pages' branch from the master.

```
git checkout gh-pages
```

The command above both creates the branch and switches to it. This new branch will include everything that master contained from the time of its creation. 

At this point, the site is able to be edited and run locally. Assuming steps 1 and 2 of the Jekyll documentation were followed correctly, run:

```
bundle exec jekyll serve --watch
```

The built site can then be viewed at 'localhost:4000/DDMAL-new-site/'. The `--watch` option automatically checks for updates to the local files and can be immediately viewed by refreshing the page. `--watch` is not supported by Windows, thus the command above will need to be rerun after each edit. 

If any changes need to be made to the 'Gemfile', run: 

```
bundle install
```

to install any updated or newly-added gems for the build. Then, the site can be rebuilt with `bundle exec jekyll serve --watch`. 

## CMS

The content management system (CMS) used for this site is [Forestry](https://forestry.io/). This is where blog entries are added, edited, and maintained. Contact [Evan Savage](mailto:evan.savage@mail.mcgill.ca) or [Emily Hopkins](mailto:emily.hopkins@mcgill.ca) to gain access to the CMS.

Blog entries are written in Markdown, which makes it easy to add text, headers, images, and lists to a new post. Here is a [Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to consult for any necessary formatting.  

To add a new post, select 'Blog' on the sidebar. On the next screen, click the 'Create New' dropdown and select 'Blog'. The left column that appears is the minimum amount of Front Matter (YAML) required for each new post. Choose a title that will display at the top of the blog post. 

The right column is where the content of each post is added. The default mode is a What-You-See-Is-What-You-Get (WYSIWYG) 
editor, which will give you immediate feedback on the desired Markdown formatting. If it is preferred, click on the ellipsis in the upper right hand corner to change to edit in 'Raw' mode, where the Markdown is explicitly written. 

If the blog post will feature images and files, upload them to the 'Media' library which can be accessed on the sidebar. To add them in the WYSIWYG post editor, hit `ctrl+shift+u`. This will open the media library where each image or file can be selected and added inline to the post. The images will be center-justified when posted to the blog. 

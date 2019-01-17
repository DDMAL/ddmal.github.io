# [DDMAL](https://DDMAL.github.io/DDMAL-new-site)

This is the repository for the new DDMAL website distributed via GitHub Pages. It is a static website built using Jekyll, meaning that there is no backend presence, and the entirety of the site is stored in this repository, blog contents included. The formatting was adapted from the Lanyon theme, developed by Mark Otto.

## Contents

- [Setup](#setup)


## Setup

You will need to download a full [Ruby development environment](https://jekyllrb.com/docs/installation/) to install Jekyll. Follow steps 1 and 2 of [these instructions](https://jekyllrb.com/docs/) after installing Ruby. 

Create a new directory and initialize an empty repository in it. 

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


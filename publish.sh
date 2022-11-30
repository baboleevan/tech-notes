#!/bin/bash

# remove gitbook old things
rm -rf _book
rm -rf docs
rm -rf yarn-error.log

# gitbook init
gitbook install && gitbook build

# build pages
mkdir docs
cp -R _book/* docs/
rm -rf ./docs/publish.sh
rm -rf ./docs/Gruntfile.js
rm -rf ./docs/yarn.lock
rm -rf ./docs/yarn-error.log

cp SUMMARY.md README.md

# delete things
git clean -fx _book

## upload
git add .
#git commit -a -m "update docs" --author="babolevan <leevan@gmail.com>"
git commit -a -m "update docs"
git push -u origin main

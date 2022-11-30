#!/bin/bash

# remove gitbook old things
rm -rf _book
rm -rf docs

# gitbook init
gitbook install && gitbook build

# build pages
mkdir docs
cp -R _book/* docs/

cp SUMMARY.md README.md

# delete things
git clean -fx _book

# upload
git add .
git commit -a -m "update docs" --author="babolevan <leevan@gmail.com>"
git push -u origin main
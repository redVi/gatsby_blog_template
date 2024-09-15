#!/usr/bin/env sh

# abort on errors
set -e

content_dir=$HOME/Dev/homework/gatsby-blog/content
current_date="$(date '+%Y-%m-%d')"

echo "Enter the filename: "
read file_name
echo "Name: $file_name"

post_name=$content_dir/"$current_date-$file_name"
mkdir $post_name && touch $post_name/$file_name.mdx

cat > $post_name/$file_name.mdx <<EOF
---
h1: "title"
title: "crawlertitle"
description: "description"
date: $current_date
tags: [frontend]
slug: $file_name
category: posts
lang: ru
table_of_contents: true
image: "$(file_name)-image.jpg"
---
EOF

#!/usr/bin/env sh

# abort on errors
set -e

repo_dir=$HOME/Dev/homework/gatsby-blog
cd $repo_dir

echo "Current directory: $PWD"

# build and navigate into the build output directory
npm run build && cd public

# if you are deploying to a custom domain
#echo 'www.mysite.com' > CNAME

git init
git config --local user.email user@domain.com
git config --local user.name username
git add -A
git commit -m 'deploy'
git push -f git@github.com:username/username.github.io.git main

cd -
rm -r $HOME/gatsby_blog
rsync -av --progress . $HOME/gatsby_blog \
  --exclude={'node_modules','.yarn','public','.cache','.git','.DS_Store','.idea','.pnp.cjs','.pnp.loader.mjs','.yarnrc.yml'} \
  --include='.*'

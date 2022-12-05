#!/usr/bin/env sh

# variables
##################################################################

# Main App
APP=./apps/+app
STATIC=./apps/+app/static
ROUTES=./apps/+app/src/routes

# New Apps
NEW=./apps



# symlinks function
##################################################################
create_route() {

  if test -d ./apps/+app/src/routes/$1; then
    # failure message
    pnpm exec echo "😁　$1 route exists!"
  else
    # create route symlink
    cd ./apps/+app/src/routes
    ln -s ../../../$1/src/routes $1
    cd ../../../..

    # Success message
    pnpm exec echo "✅　$1 route created!"
  fi

}

# creat static 
##################################################################
create_static() {

  if test -d apps/$1/static; then
    # failure message
    pnpm exec echo "😁　$1 static exists!"
  else
    # create static folder
    cd ./apps/$1
    ln -s ../+app/static static
    cd ../..

    pnpm exec echo "✅　$1 static created!"
  fi

}

create_symlinks() {
pnpm exec echo "
  　
creating $1 symlinks ...
⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼"
  create_static "$1"
  create_route "$1"
}

# create symlinks
create_symlinks "docs"
create_symlinks "site"

pnpm exec echo " 　"
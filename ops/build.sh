#!/bin/bash

#TODO: Use ant

BUILDROOT=$PWD/build
SRCROOT=$PWD/src
OPSROOT=$PWD/ops
TEMPROOT=$PWD/temp_build

rm -rf "$BUILDROOT/build/*"
mkdir -p "$BUILDROOT/build"
rm -rf $TEMPROOT
mkdir -p $TEMPROOT

#TODO: Still need images and less ...

# Creates concatenated js file with dependecy checks
node $OPSROOT/r.js -o $OPSROOT/app.build.js > $TEMPROOT/dependency.txt

# Takes the dependency graph and finds all the files in the /views/ directory and concatenates
# all files in /less dir that match the view file name, outputs to build/less/views.less
node $OPSROOT/backboneless.js $TEMPROOT/dependency.txt $SRCROOT/less $BUILDROOT/less/views.less

mkdir -p $BUILDROOT/css
$PWD/node_modules/less/bin/lessc $BUILDROOT/less/app.less > $BUILDROOT/css/app.css

rm -rf $BUILDROOT/less
rm -rf $TEMPROOT
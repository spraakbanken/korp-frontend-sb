#!/bin/bash
KORP_REPO=../korp-frontend
SCRIPT_DIR=`pwd`

set -x

if [ $# -ne 2 ]; then
    echo "Usage: $0 VERSION dev/stable"
    exit 1
fi

if [ $2 -ne "stable" ] || [ $2 -ne "dev" ]; then
    echo "Usage: $0 VERSION dev/stable"
    exit 1
fi

rm -r release
mkdir release

cd $KORP_REPO
yarn run build

cd $SCRIPT_DIR

# make dist release zip
DIST_NAME="korp_frontend-$1-$2"
cp -r $KORP_REPO/dist/ "release/$DIST_NAME"
cd release
zip --quiet -r "$DIST_NAME.zip" $DIST_NAME
cd ..

svn import -m "added frontend release $1" release/$DIST_NAME.zip https://svn.spraakdata.gu.se/repos/lb/trunk/sbkhs/pub/releases/$DIST_NAME.zip

if [ "$2" == "stable" ]; then
    svn import -m "added frontend release $1" release/$DIST_NAME.zip https://svn.spraakdata.gu.se/repos/lb/trunk/sbkhs/pub/releases/korp_frontend-$1-dev.zip
fi

rm -r release


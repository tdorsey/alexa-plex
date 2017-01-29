#!/bin/bash          
echo Build started
rm -rf dist
mkdir -p dist/install
npm install --prefix dist/install .
rm dist/dist.zip
cd dist/install/node_modules/alexa-plex/
zip -r ../../../dist.zip * .env
echo files are ready
cd ../../../../
echo uploading zip file, please wait...
aws lambda update-function-code --zip-file fileb://dist/dist.zip --function-name alexa-plex
aws lambda publish-version --function-name alexa-plex
echo upload is done, exiting.

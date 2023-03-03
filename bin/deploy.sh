#!/bin/sh

echo 'INSTALLING DEPENDENCIES...'
lerna exec yarn
echo 'BUILDING...'
yarn build
read -p "Ready to deploy? " -n 1 -r
echo ''
echo 'DEPLOYING...'
az login
az account set --subscription ed1fc693-2d90-4ce8-8e79-8d41dc9f0e5b
az storage blob upload-batch -d 'https://remojansenwebaeb3ea51.blob.core.windows.net/$web' -s './out' --overwrite
az cdn endpoint purge --resource-group remojansenweb --profile-name remojansenweb --name remojansenweb --no-wait --content-paths /*
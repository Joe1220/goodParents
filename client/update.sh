#!/bin/sh

git pull
npm install
npm run build
cd ./src/server
npm install
cd ../..
docker-compose up -d --build

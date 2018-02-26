#!/bin/sh

git pull
npm install
npm build
docker-compose up -d

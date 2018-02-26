#!/bin/sh

git pull
npm install
npm run build
docker-compose up -d --build

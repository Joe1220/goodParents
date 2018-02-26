#!/bin/sh

npm install
npm build
docker-compose up -d

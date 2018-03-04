FROM node:alpine

WORKDIR /var/www/server/
RUN npm install -g nodemon

EXPOSE ${PORT}
ENTRYPOINT [ "nodemon", "server.js" ]

FROM node:alpine

COPY server.js /var/www/
WORKDIR /var/www/
RUN npm init -y && npm install -g nodemon && npm install express

EXPOSE ${PORT}
ENTRYPOINT [ "nodemon", "server.js" ]

FROM node:alpine

ENV PORT=3001

COPY ./server /var/www/server/
WORKDIR /var/www/server/
RUN npm init -y && npm install express mongoose body-parser

EXPOSE ${PORT}
ENTRYPOINT [ "node", "server.js" ]

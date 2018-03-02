FROM node:alpine

ENV PORT=3001

COPY ./server /var/www/server/
WORKDIR /var/www/server/
RUN npm init -y && npm install express mongoose body-parser helmet cookie-parser jsonwebtoken

EXPOSE ${PORT}
ENTRYPOINT [ "node", "server.js" ]

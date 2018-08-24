FROM node:alpine

COPY server.js /var/www/
WORKDIR /var/www/
RUN npm init -y && npm install express http-proxy-middleware

EXPOSE ${PORT}
ENTRYPOINT [ "node", "server.js" ]

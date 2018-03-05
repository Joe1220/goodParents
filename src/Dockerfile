FROM node:alpine

WORKDIR /var/www/server/
RUN npm install -g pm2@latest

EXPOSE ${PORT}
ENTRYPOINT [ "pm2", "start", "server.js", "--watch", "--no-daemon" ]

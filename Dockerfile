FROM node:alpine

COPY server.js /var/www/
WORKDIR /var/www/
RUN npm init -y && npm install -g pm2@latest && npm install express

EXPOSE ${PORT}
ENTRYPOINT [ "pm2", "start", "server.js", "--watch", "--no-daemon" ]

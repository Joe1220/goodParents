FROM node:alpine

ENV PORT=3001

COPY ./server /var/www/server/
WORKDIR /var/www/server/
RUN npm init -y && npm install -g express mongoose && npm link express && npm link mongoose

EXPOSE ${PORT}
ENTRYPOINT [ "node", "server.js" ]

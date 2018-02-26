FROM node:alpine

ENV PORT=80

COPY ./build/* /var/www/build/
COPY server.js /var/www/
WORKDIR /var/www/
RUN npm init -y && npm install express

EXPOSE ${PORT}
ENTRYPOINT [ "npm", "start" ]

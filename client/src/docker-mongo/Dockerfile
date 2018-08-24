FROM mongo:3

ADD *.json /tmp/
ADD userset.js /tmp/
ADD mongod.conf /tmp/
WORKDIR /tmp/

EXPOSE ${PORT}
# ENTRYPOINT tail -f /dev/null
ENTRYPOINT \
mongod --port 27017 --fork --logpath /data/db/mongodb.log --logappend && \
mongoimport --host localhost --port 27017 --db goodParents --collection products --file mock_products.json --jsonArray && \
mongoimport --host localhost --port 27017 --db goodParents --collection users --file mock_users.json --jsonArray && \
mongo --host localhost --port 27017 userset.js && \
mongod --shutdown && \
# rm *.json userset.js && \
mongod --config ./mongod.conf --bind_ip_all --port ${PORT}
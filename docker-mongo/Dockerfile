FROM mongo:3

ADD MOCK_DATA.json /tmp
ADD userset.js /tmp
ADD mongod.conf /tmp
WORKDIR /tmp

EXPOSE ${PORT}
# ENTRYPOINT tail -f /dev/null
ENTRYPOINT \
mongod --port 27017 --fork --logpath /data/db/mongodb.log --logappend && \
mongoimport --host localhost --port 27017 --db goodParents --collection mockdata --file MOCK_DATA.json --jsonArray && \
mongo --host localhost --port 27017 userset.js && \
mongod --shutdown && \
rm MOCK_DATA.json userset.js && \
mongod --config ./mongod.conf --setParameter enableLocalhostAuthBypass=false --bind_ip_all --port ${PORT}
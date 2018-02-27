conn = new Mongo();
db = conn.getDB("admin");

try {
  db.createUser({
    user: "admin",
    pwd: "abc123",
    roles: [{
      role: "root",
      db: "admin"
    }]
  });
  
  db = db.getSiblingDB('goodParents');
  
  db.createUser({
    user: "goodParents",
    pwd: "abc123",
    roles: [{
      role: "dbOwner",
      db: "goodParents"
    }]
  });  
} catch (error) {
  // empty.
}

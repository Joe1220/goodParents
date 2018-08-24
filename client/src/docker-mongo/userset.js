conn = new Mongo();
db = conn.getDB("admin");

try {
  db.createUser({
    user: "admin",
    pwd: "abc123",
    roles: [
      {
        role: "root",
        db: "admin"
      }
    ]
  });

  db = db.getSiblingDB("goodParents");

  db.createUser({
    user: "joe1220",
    pwd: "c159789c",
    roles: [
      {
        role: "dbOwner",
        db: "heroku_t87150df"
      }
    ]
  });
} catch (error) {
  // empty.
}

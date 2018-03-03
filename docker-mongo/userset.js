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
    user: "goodParents",
    pwd: "abc123",
    roles: [
      {
        role: "dbOwner",
        db: "goodParents"
      }
    ]
  });
} catch (error) {
  // empty.
}

try {
  db = db.getSiblingDB("goodParents");

  db.collection("users").updateMany(
    {},
    [
      {
        id: "aaa",
        email: "aaa@aaa.com",
        password: "1234",
        admin: true,
        name: "김갑돌",
        telephone: "010-0000-0000",
        userimg: {}
      },
      {
        id: "bbb",
        email: "bbb@aaa.com",
        password: "123456",
        admin: false,
        name: "김회원",
        telephone: "010-1111-0000",
        userimg: {}
      }
    ],
    {
      upsert: true
    }
  );
} catch (error) {
  // empty.
}

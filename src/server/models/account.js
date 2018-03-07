const User = require("../db/user");

module.exports = {
  get: async (req, res, callback) => {
    const email = req.decoded.email;
    callback(
      null,
      await User.findOneByEmail(email)
        .then((results) => {
          return { name: results.name, telephone: results.telephone, email: results.email }
        })
        .catch(error => {
          throw new Error(error);
        })
    );
  },
  put: async (req, res, callback) => {
    const email = req.decoded.email;
    callback(
      null,
      await User.findOneByEmail(email)
        .then(results => getUserOid(results))
        .then(user => {
          return Baby.update(
            {
              user: user,
              baby: { $elemMatch: { _id: req.body.oid } }
            },
            {
              $set: {
                "baby.$.name": req.body.name,
                "baby.$.date": req.body.date,
                "baby.$.sex": req.body.sex,
                "baby.$.weight": req.body.weight,
                "baby.$.height": req.body.height
              }
            }
          ).exec();
        })
    );
  }
};
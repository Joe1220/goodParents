const Baby = require("../db/baby");
const User = require("../db/user");

const getUserOid = email => {
  return email._id;
};

module.exports = {
  get: async (req, res, callback) => {
    const email = req.decoded.email;
    callback(
      null,
      await User.findOneByEmail(email)
        .then(result => getUserOid(result))
        .then(user =>
          Baby.findOne({ user: user }).exec()
        )
        .catch(error => {
          throw new Error(error);
        })
    );
  },

  post: async (req, res, callback) => {
    const email = req.decoded.email;
    callback(
      null,
      await User.findOneByEmail(email)
        .then(result => getUserOid(result))
        .then(user => {
          const { name, date, sex, weight, height } = req.body;
          const babyData = {
            name, date, sex, weight, height
          };
          return { user, babyData };
        })
        .then(data => {
          return Baby.update(
            { user: data.user },
            { $push: { baby: data.babyData } },
            { upsert: true }
          ).exec();
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
  },

  delete: async (req, res, callback) => {
    const email = req.decoded.email;
    callback(
      null,
      await User.findOneByEmail(email)
        .then(results => getUserOid(results))
        .then(user => {
          const { name } = req.body;
          return { user, name };
        })
        .then(data => {
          return Baby.update(
            {
              user: data.user,
            },
            {
              $pull: { baby: { name: data.name } }
            }
          ).exec();
        })
    );
  }
};
const Counseling = require("../db/counseling");
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
        .then(user => Counseling.findOne({ user: user }).exec())
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
          return Counseling.update(
            { user: user },
            {
              $push: {
                inquiry: {
                  $each: [
                    {
                      category: req.body.category,
                      subcategory: req.body.subcategory,
                      title: req.body.title,
                      body: req.body.body
                    }
                  ],
                  $sort: { date: -1 }
                }
              }
            },
            { upsert: true }
          ).exec();
        })
        .catch(error => {
          throw new Error(error);
        })
    );
  }
};

const OrderHistory = require("../db/orderHistory");
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
          OrderHistory.findOne({ user: user }).populate("items.product").exec()
        ).then((results)=>{
          return { date: results.date, items: results.items }
        })
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
const Exchange = require("../db/exchange");
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
          Exchange.findOne({ user: user }).populate("items.product").exec()
        ).then((results) => {
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
          return Exchange.update(
            {},
            {
              user: user.user,
              category: parseInt(req.body.category, 10),
              reason: req.body.reason,
              $push: { product: req.body.items, qty: parseInt(req.body.qty, 10) },
              deliveryfirm: parseInt(req.body.deliveryfirm, 10),
              deliveryinfo: {
                name: req.body.name,
                adress: req.body.address,
                phone: req.body.phone,
                homePhone: req.body.homePhone,
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
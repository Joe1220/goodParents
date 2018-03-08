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
        .then(user => {
          return OrderHistory.aggregate([
            { $match: { user: user } },
            { $sort: { date: -1 } },
            {
              $project: {
                ordererInfo: false
              }
            }
          ]);
        })
        .then(result => {
          return OrderHistory.populate(result, { path: "items.product" });
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
        .then(result => getUserOid(result))
        .then(user => {
          return OrderHistory.update(
            {
              user: user,
              _id: req.body.orderId,
              items: { $elemMatch: { product: req.body.oldProduct } }
            },
            {
              $set: {
                "items.$.product": req.body.newProduct,
                "items.$.qty": req.body.qty
              }
            }
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
        .then(result => getUserOid(result))
        .then(user => {
          return OrderHistory.update(
            {
              user: user,
              _id: req.body.orderId,
              items: { $elemMatch: { product: req.body.product } }
            },
            {
              $set: {
                "items.$.checked": false
              }
            }
          ).exec();
        })
        .catch(error => {
          throw new Error(error);
        })
    );
  }
};

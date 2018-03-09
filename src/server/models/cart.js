const Cart = require("../db/cart.js");
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
          return Cart.aggregate([
            { $match: { user: user } },
            { $addFields: { count: { $size: "$cart" } } }
          ]);
        })
        .then(result => {
          return Cart.populate(result[0], { path: "cart._id" });
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
          return Cart.findOneAndUpdate(
            { user: user },
            {
              $addToSet: {
                cart: {
                  _id: req.body.item,
                  checked: req.body.checked,
                  year: req.body.year,
                  month: req.body.month,
                  day: req.body.day
                }
              }
            },
            { upsert: true, new: true }
          );
        })
        .then(result => {
          return result.cart.length;
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
          return Cart.findOneAndUpdate(
            {
              user: user,
              cart: {
                $elemMatch: {
                  _id: req.body.item,
                  year: req.body.year,
                  month: req.body.month,
                  day: req.body.day
                }
              }
            },
            {
              $set: { "cart.$.checked": req.body.checked }
            }
          );
        })
        .then(result => {
          return result.cart.length;
        })
    );
  },

  delete: async (req, res, callback) => {
    const email = req.decoded.email;
    callback(
      null,
      await User.findOneByEmail(email)
        .then(results => getUserOid(results))
        // .then(user => {
        //   const { item } = req.body;
        //   return { user, item };
        // })
        .then(user => {
          return Cart.findOneAndUpdate(
            {
              user: user,
              cart: {
                $elemMatch: {
                  _id: req.body.item,
                  year: req.body.year,
                  month: req.body.month,
                  day: req.body.day
                }
              }
            },
            { $pull: { cart: { _id: req.body.item } } }
          );
        })
        .then(result => {
          return result.cart.length;
        })
    );
  },

  increase: async (req, res, callback) => {
    const email = req.decoded.email;
    callback(
      null,
      await User.findOneByEmail(email)
        .then(results => getUserOid(results))
        .then(user => {
          return Cart.findOneAndUpdate(
            {
              user: user,
              cart: {
                $elemMatch: {
                  _id: req.body.item,
                  year: req.body.year,
                  month: req.body.month,
                  day: req.body.day
                }
              }
            },
            {
              $inc: { "cart.$.qty": 1 }
            }
          );
        })
        .then(result => {
          return result.cart.length;
        })
    );
  },

  decrease: async (req, res, callback) => {
    const email = req.decoded.email;
    callback(
      null,
      await User.findOneByEmail(email)
        .then(results => getUserOid(results))
        .then(user => {
          return Cart.findOneAndUpdate(
            {
              user: user,
              cart: {
                $elemMatch: {
                  _id: req.body.item,
                  year: req.body.year,
                  month: req.body.month,
                  day: req.body.day
                }
              }
            },
            {
              $inc: { "cart.$.qty": -1 }
            }
          );
        })
        .then(result => {
          return result.cart.length;
        })
    );
  }

  // count: async (req, res, callback) => {
  //   const email = req.decoded.email;
  //   callback(
  //     null,
  //     await User.findOneByEmail(email)
  //       .then(result => getUserOid(result))
  // .then(user => {
  //   return Cart.aggregate([
  //     { $match: { user: user } },
  //     { $project: { _id: false, count: { $size: "$cart" } } }
  //   ]);
  // })
  // .then(array => array[0].count)
  //       .catch(error => {
  //         throw new Error(error);
  //       })
  //   );
  // }
};

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
        // .then(user => {
        //   const { item, checked } = req.body;
        //   const cartData = {
        //     _id: item,
        //     checked
        //   };
        //   return { user, cartData };
        // })
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
            { upsert: true, new: true, sort: {"cart.month": 1} }
          );
        })
        .then(result => {
          return result.cart.length;
          // return result.aggregate([{ $addFields: { count: { $size: "$cart" } } }]);
        })
        // .then(data => {
        //   Cart.update(
        //     { user: data.user },
        //     { $push: { cart: data.cartData } },
        //     { upsert: true }
        //   ).exec();
        //   return data.user;
        // })
        // .then(user => {
        //   return Cart.aggregate([
        //     { $match: { user: user } },
        //     { $project: { _id: false, count: { $size: "$cart" } } }
        //   ]);
        // })
        // .then(array => array[0].count)
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
          const { item, qty, checked } = req.body;
          const cartData = {
            _id: item,
            qty,
            checked
          };
          return { user, cartData };
        })
        .then(data => {
          return Cart.update(
            {
              user: data.user,
              cart: { $elemMatch: { _id: data.cartData._id } }
            },
            {
              $set: {
                "cart.$.qty": data.cartData.qty,
                "cart.$.checked": data.cartData.checked
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
          const { item } = req.body;
          return { user, item };
        })
        .then(data => {
          return Cart.update(
            {
              user: data.user
            },
            {
              $pull: { cart: { _id: data.item } }
            }
          ).exec();
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

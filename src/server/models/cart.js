const Cart = require("../db/cart.js");
const User = require("../db/user");

const getUserOid = email => {
  return email._id;
};

module.exports = {
  get: async (req, res, callback) => {
    const email = req.decoded.email;
    // if (!req.decoded.email) {
    //   return res.status(403).json({
    //     message: 'you are not logged in'
    //   })
    // }
    callback(
      null,
      await User.findOneByEmail(email)
        .then(result => getUserOid(result))
        .then(user =>
          Cart.findOne({ user: user })
            .populate("cart.product")
            .exec()
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
          const { item, qty, checked } = req.body;
          const cartData = {
            product: item,
            qty,
            checked
          };
          return { user, cartData };
        })
        .then(data => {
          return Cart.update(
            { user: data.user },
            { $push: { cart: data.cartData } },
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
          const { item, qty, checked } = req.body;
          const cartData = {
            product: item,
            qty,
            checked
          };
          return { user, cartData };
        })
        .then(data => {
          return Cart.update(
            {
              user: data.user,
              cart: { $elemMatch: { product: data.cartData.product } }
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
              $pull: { cart: { product: data.item } }
            }
          ).exec();
        })
    );
  }
};

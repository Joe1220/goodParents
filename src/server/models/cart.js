const Cart = require("../db/cart.js");
const User = require("../db/user");

module.exports = {
  get: async (req, res, callback) => {
    // refuse if not an admin
    if (!req.decoded.email) {
      return res.status(403).json({
        message: 'you are not logged in'
      })
    }
    callback(null, await Cart.find({}));
  },
  post: async (req, res, callback) => {
    const email = req.decoded.email;
    // refuse if not an admin
    if (!email) {
      return res.status(403).json({
        message: 'you are not logged in'
      })
    }
    const getUserOid = (email) => {
      return email._id
    }
    // Cart.save({ _id: "5a8cd08bfc13ae14c7000ab8" })
    callback(null, await User.findOneByEmail(email)
      .then(result => getUserOid(result))
      .then((user) => {
        const { item, qty, visible } = req.body;
        const date = new Date().toISOString();
        const cartData = [
          { date: date, visible: visible },
          [{ _id: item }, { qty: qty }]
        ];
        return { user, cartData };
      })
      .then((data) => {
        return Cart.update({ user: data.user }, { user: data.user, cart: data.cartData }, { upsert: true }).exec();
      })
      .catch((error) => {
        throw new Error(error);
      }));
  }
};
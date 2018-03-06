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
    callback(null, await User.findOneByEmail(email)
      .then(result => getUserOid(result))
      .then((user) => {
        const { item, qty, visible } = req.body;
        const date = new Date().toISOString();
        const cartData = [
          { date: date, visible: visible },
          [{ product: item, qty: qty }]
        ];
        return { user, cartData };
      })
      .then((data) => {
        return Cart.update({ user: data.user }, { $push: { cart: [data.cartData] } }, { upsert: true }).exec();
      })
      .catch((error) => {
        throw new Error(error);
      }));
  },
  put: async (req, res, callback) => {
    const email = req.decoded.email;
    // refuse if not an admin
    if (!req.decoded.email) {
      return res.status(403).json({
        message: 'you are not logged in'
      })
    }
    const getUserOid = (email) => {
      return email._id
    }
    callback(null, await User.findOneByEmail(email)
      .then(results => getUserOid(results))
      .then((user) => {
        const { item, qty, visible } = req.body;
        const cartData = [
          { visible: visible },
          [{ product: item, qty: qty }]
        ];
        return { user, cartData };
      })
      .then((data) => {
        return Cart.update({ user: data.user }, { user: data.user, $set: { cart: data.cartData } }).exec();
      }));
  },
  delete: async (req, res, callback) => {
    const email = req.decoded.email;
    // refuse if not an admin
    if (!req.decoded.email) {
      return res.status(403).json({
        message: 'you are not logged in'
      })
    }
    const getUserOid = (email) => {
      return email._id
    }
    callback(null, await User.findOneByEmail(email)
      .then(results => getUserOid(results))
      .then((user) => {
        const { item, qty, visible } = req.body;
        const date = new Date().toISOString();
        const cartData = [
          { date: date, visible: visible },
          [{ product: item, qty: qty }]
        ];
        return { user, cartData };
      })
      .then((data) => {
        return Cart.remove({ user: data.user }).exec();
      }));
  },
};
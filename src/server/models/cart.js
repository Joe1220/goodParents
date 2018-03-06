const Cart = require("../db/cart.js");

module.exports = {
  // list: async (req, res, callback) => {
  //   // refuse if not an admin
  //   if (!req.decoded.admin) {
  //     return res.status(403).json({
  //       message: 'you are not an admin'
  //     })
  //   }
  //   callback(null, await User.find({})
  //     .then(
  //       users => {
  //         res.json({ users })
  //       }
  //     ));
  // },
  // assignAdmin: async (req, res, callback) => {
  //   // refuse if not an admin
  //   if (!req.decoded.admin) {
  //     return res.status(403).json({
  //       message: 'you are not an admin'
  //     })
  //   }
  //   // hearder content-type: application/json으로 요청해야 됨
  //   callback(null, await User.findOneByEmail(req.body.email)
  //     .then(
  //       user => user.assignAdmin()
  //     ).then(
  //       res.json({
  //         success: true
  //       })
  //     ))
  // }
};
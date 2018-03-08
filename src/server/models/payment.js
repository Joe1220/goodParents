const OrderHistory = require("../db/orderHistory");
const Cart = require("../db/cart.js");
const User = require("../db/user");

const getUserOid = email => {
  return email._id;
};

module.exports = {
  post: async (req, res, callback) => {
    const email = req.decoded.email;
    callback(
      null,
      await User.findOneByEmail(email)
        .then(result => getUserOid(result))
        .then(user => {
          return Cart.findOne({ user: user }).exec().then(result => {
            return {
              user: user,
              result: result
            }
          });
        })
        .then((data) => {
          const info = {
            recipient: req.body.recipient,
            telephone: req.body.telephone,
            zipCode: parseInt(req.body.zipCode, 10),
            address: req.body.address,
            addressDetail: req.body.addressDetail,
            deliveryMessage: req.body.deliveryMessage,
            cardNumber: parseInt(req.body.cardNumber, 10),
            expYear: parseInt(req.body.expYear),
            expMonth: parseInt(req.body.expMonth),
            CVC: parseInt(req.body.CVC),
            name: req.body.name
          }
          return OrderHistory.insertMany(
            [{
              user: data.user,
              items: data.result.cart,
              ordererInfo: info
            }]
          );
        })
        .catch(error => {
          throw new Error(error);
        })
    );
  }
};
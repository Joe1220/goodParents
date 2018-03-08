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
          // aggregate는 연산 처리가 추가된 쿼리이다. 특정한 조건을 준 쿼리를 처리하기 위해 쓰인다.
          return Cart.aggregate([
            { $match: { user: user } },
            {
              $project: {
                user: user,
                cart: {
                  $filter: {
                    input: "$cart",
                    as: "item",
                    cond: { $eq: ["$$item.checked", true] }
                  }
                }
              }
            }
          ]);
        })
        .then(data => {
          data = data[0];
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
          };
          return OrderHistory.insertMany([
            {
              user: data.user,
              items: data.cart,
              ordererInfo: info
            }
          ]);
        })
        .catch(error => {
          throw new Error(error);
        })
    );
  }
};

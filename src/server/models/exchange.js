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
          Exchange.find({ user: user })
            .populate({
              path: "items.product",
              model: "Product"
            })
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
          return Exchange.insertMany([
            {
              user: user,
              category: parseInt(req.body.category, 10),
              reason: req.body.reason,
              items: req.body.items,
              deliveryFirm: parseInt(req.body.deliveryFirm, 10),
              deliveryInfo: {
                name: req.body.name,
                adress: req.body.address,
                phone: req.body.phone,
                homePhone: req.body.homePhone
              }
            }
          ]);
        })
        .catch(error => {
          throw new Error(error);
        })
    );
  }
};

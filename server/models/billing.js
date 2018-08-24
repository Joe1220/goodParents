const Billing = require("../db/billing");
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
        .then(user => Billing.findOne({ user: user }).exec())
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
          return Billing.update(
            { user: user },
            {
              // billingType: req.body.billingType,
              cardNumber: req.body.cardNumber,
              expYear: req.body.expYear,
              expMonth: req.body.expMonth,
              CVC: req.body.CVC,
              name: req.body.name
            },
            { upsert: true }
          ).exec();
        })
        .catch(error => {
          throw new Error(error);
        })
    );
  }
};

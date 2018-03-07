const Delivery = require("../db/delivery");
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
          Delivery.findOne({ user: user }).exec()
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
          const { codeZip, address, addressDetail, checked } = req.body;
          const deliveryData = { codeZip, address, addressDetail, checked };
          return { user, deliveryData };
        })
        .then(data => {
          return Delivery.update(
            { user: data.user },
            { $push: { delivery: data.deliveryData } },
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
    const { codeZip, address, addressDetail, checked } = req.body;
    callback(
      null,
      await User.findOneByEmail(email)
        .then(results => getUserOid(results))
        .then(user => {
          return Delivery.update(
            {
              user: user,
              delivery: { $elemMatch: { _id: req.body.oid } }
            },
            {
              $set: {
                "delivery.$.codeZip": req.body.codeZip,
                "delivery.$.address": req.body.address,
                "delivery.$.addressDetail": req.body.addressDetail,
                "delivery.$.checked": req.body.checked
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
          const { oid } = req.body;
          return { user, oid };
        })
        .then(data => {
          return Delivery.update(
            {
              user: data.user,
            },
            {
              $pull: { delivery: { _id: data.oid } }
            }
          ).exec();
        })
    );
  }
};
const User = require("../db/user");

module.exports = {
  get: async (req, res, callback) => {
    const email = req.decoded.email;
    callback(
      null,
      await User.findOneByEmail(email)
        .then((results) => {
          return { name: results.name, telephone: results.telephone, email: results.email }
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
        .then((userinfo) => {
          const { name, telephone, email } = req.body
          const info = { name, telephone, email }
          userinfo.updateUser(info)
        })
        .then(
          res.json({
            success: true
          })
        )
    );
  }
};
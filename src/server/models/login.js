const User = require("../db/user.js");

module.exports = {
  post: async (req, callback) => {
    const email = req.body.email;
    const password = req.body.password;
    callback(null, await User.find({email: email, password: password }));
  }
};
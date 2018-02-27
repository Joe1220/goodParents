const User = require("../db/user.js");

module.exports = {
  get: async (req, callback) => {
    const email = req.query.email;
    const password = req.query.password;
    callback(null, await User.find({email, passaword}));
  }
};
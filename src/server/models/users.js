const User = require("../db/user.js");

module.exports = {
  get: async (req, callback) => {
    callback(null, await User.find());
  }
};
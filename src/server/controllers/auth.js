var AuthModels = require("../models/auth");

module.exports = {
  register: (req, res) => {
    AuthModels.register(req, res, (error, results) => {
      if (error) console.error(error);
      res.json(results)
    });
  }
};
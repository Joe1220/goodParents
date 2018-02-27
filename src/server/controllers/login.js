var LoginModels = require("../models/login");

module.exports = {
  post: (req, res) => {
    LoginModels.post(req, (error, results) => {
      if(error) console.error(error);
      res.json(results);
    });
  }
};
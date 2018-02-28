var UsersModels = require("../models/users");

module.exports = {
  get: (req, res) => {
    UsersModels.get(req, (error, results) => {
      if(error) console.error(error);
      res.json(results);
      res.end();
    });
  }
};
var UsersModels = require("../models/users");

module.exports = {
  list: (req, res) => {
    UsersModels.list(req, res, (error, results) => {
      if(error) console.error(error);
      res.json(results);
    });
  },
  assignAdmin: (req, res) => {
    UsersModels.assignAdmin(req, res, (error, results) => {
      if(error) console.error(error);
      res.json(results);
    });
  },
};
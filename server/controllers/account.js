var AccountModels = require("../models/account");

module.exports = {
  get: (req, res) => {
    AccountModels.get(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(200).json(result);
    });
  },
  put: (req, res) => {
    AccountModels.put(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(204).json(result);
    });
  }
};
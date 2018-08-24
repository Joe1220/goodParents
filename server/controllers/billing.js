var BillingModels = require("../models/billing");

module.exports = {
  get: (req, res) => {
    BillingModels.get(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.json(result);
    });
  },

  put: (req, res) => {
    BillingModels.put(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(204).json(result);
    });
  }
};

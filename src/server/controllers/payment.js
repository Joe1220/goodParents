var PaymentModels = require("../models/payment");

module.exports = {
  get: (req, res) => {
    PaymentModels.get(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(200).json(result);
    });
  },

  post: (req, res) => {
    PaymentModels.post(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(201).json(result);
    });
  },

  delete: (req, res) => {
    PaymentModels.delete(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(204).json(result);
    });
  }
};
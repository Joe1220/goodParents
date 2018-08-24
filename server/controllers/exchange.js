var ExchangeModels = require("../models/exchange");

module.exports = {
  get: (req, res) => {
    ExchangeModels.get(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(200).json(result);
    });
  },

  post: (req, res) => {
    ExchangeModels.post(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(201).json(result);
    });
  },

  delete: (req, res) => {
    ExchangeModels.delete(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(204).json(result);
    });
  }
};
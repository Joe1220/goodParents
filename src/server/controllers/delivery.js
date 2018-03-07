var DeliveryModels = require("../models/delivery");

module.exports = {
  get: (req, res) => {
    DeliveryModels.get(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(200).json(result);
    });
  },

  post: (req, res) => {
    DeliveryModels.post(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(201).json(result);
    });
  },

  put: (req, res) => {
    DeliveryModels.put(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(204).json(result);
    });
  },

  delete: (req, res) => {
    DeliveryModels.delete(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(204).json(result);
    });
  }
};
var CartModels = require("../models/cart");

module.exports = {
  get: (req, res) => {
    CartModels.get(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.json(result);
    });
  },

  post: (req, res) => {
    CartModels.post(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(201).json(result);
    });
  },

  put: (req, res) => {
    CartModels.put(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(204).json(result);
    });
  },

  delete: (req, res) => {
    CartModels.delete(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(204).json(result);
    });
  },

  increase: (req, res) => {
    CartModels.increase(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.json(result);
    });
  },

  decrease: (req, res) => {
    CartModels.decrease(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.json(result);
    });
  }
};

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
      res.json(result);
    });
  },

  put: (req, res) => {
    CartModels.put(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.json(result);
    });
  },

  delete: (req, res) => {
    CartModels.delete(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.json(result);
    });
  }
};

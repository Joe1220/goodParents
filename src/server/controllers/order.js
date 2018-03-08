var OrderModels = require("../models/order");

module.exports = {
  get: (req, res) => {
    OrderModels.get(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(200).json(result);
    });
  },

  put: (req, res) => {
    OrderModels.put(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(204).json(result);
    });
  },

  delete: (req, res) => {
    OrderModels.delete(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(204).json(result);
    });
  }
};

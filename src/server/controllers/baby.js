var BabyModels = require("../models/baby");

module.exports = {
  get: (req, res) => {
    BabyModels.get(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(200).json(result);
    });
  },

  post: (req, res) => {
    BabyModels.post(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(201).json(result);
    });
  },

  put: (req, res) => {
    BabyModels.put(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(204).json(result);
    });
  },

  delete: (req, res) => {
    BabyModels.delete(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(204).json(result);
    });
  }
};

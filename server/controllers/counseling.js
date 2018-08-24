var CounselingModels = require("../models/counseling");

module.exports = {
  get: (req, res) => {
    CounselingModels.get(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.json(result);
    });
  },

  post: (req, res) => {
    CounselingModels.post(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(201).json(result);
    });
  }
};

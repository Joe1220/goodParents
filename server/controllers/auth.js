const AuthModels = require("../models/auth");

module.exports = {
  register: (req, res) => {
    AuthModels.register(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(201).json(result);
    });
  },
  login: (req, res) => {
    AuthModels.login(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      
      res.json(result);
    });
  },
  check: (req, res) => {
    AuthModels.check(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.json(result);
    });
  },
  logout: (req, res) => {
    AuthModels.logout(req, res, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(200).send(result);
    });
  }
};

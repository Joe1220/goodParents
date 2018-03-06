var ProductsModels = require("../models/products");

module.exports = {
  get: (req, res) => {
    ProductsModels.get(req, (error, results) => {
      if(error) res.status(500).send(error);
      res.json(results);
    });
  }
};
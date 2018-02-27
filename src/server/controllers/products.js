var ProductsModels = require("../models/products");

module.exports = {
  get: (req, res) => {
    ProductsModels.get(req, (error, results) => {
      if(error) console.error(error);
      res.json(results);
    });
  }
};
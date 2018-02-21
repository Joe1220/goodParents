var models = require("../models");

module.exports = {
  foodDetail: {
    get: function(req, res) {
      models.food.get(req.query.date, function(error, results) {
        if (error) console.error(error);
        res.json(results);
      });
    }
  }
};

var models = require('../models');

module.exports = {
  idol: {
    get: function (req, res) {
      models.idol.get(function (err, results) {
          res.json(results);
      });
    }
  }
};
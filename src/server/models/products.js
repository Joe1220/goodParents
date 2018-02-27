const pickItem = require("./pickItem");

module.exports = {
  get: function(req, callback) {
    const date = req.query.date;
    callback(null, pickItem(date));
  }
};
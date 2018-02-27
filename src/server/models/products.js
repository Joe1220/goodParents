const pickItem = require("./pickItem");

module.exports = {
  get: function(date, callback) {
    const today = new Date().toISOString().slice(0, 10);
    callback(null, pickItem(today));
  }
};
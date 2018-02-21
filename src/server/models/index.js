// const db = require("../db");
const pickItem = require("./pickItem");

module.exports = {
  food: {
    get: function(date, callback) {
      const today = new Date().toISOString().slice(0, 10);
      callback(null, pickItem(date));
    }
  }
};

// const db = require("../db");
const randomItem = require("./randomItem");

module.exports = {
  food: {
    get: function(callback) {
      callback(null, randomItem());
    }
  }
};

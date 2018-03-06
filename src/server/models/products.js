const DailyProduct = require('../db/dailyProducts');

module.exports = {
  get: async (req, callback) => {
    let date = req.query.date;
    date = new Date(date).toISOString();
    callback(null, await DailyProduct.getByDate(date));
  }
};
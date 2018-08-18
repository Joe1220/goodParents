const DailyProduct = require('../db/dailyProducts');

module.exports = {
  get: async (req, callback) => {
    let date = req.query.date;
    date = new Date(date).toISOString();
    const result = await DailyProduct.getByDate(date);
    callback(null, result);
  }
};
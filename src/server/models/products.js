const DailyProduct = require('../db/dailyProducts');

module.exports = {
  get: async (req, callback) => {
    console.log('req: ', req.query.date, 'callback: ', callback)
    let date = req.query.date;
    date = new Date(date).toISOString();
    callback(null, await DailyProduct.getByDate(date));
  }
};
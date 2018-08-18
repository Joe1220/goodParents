const DailyProduct = require('../db/dailyProducts');

module.exports = {
  get: async (req, callback) => {
    console.log('req: ', req.query.date, 'callback: ', callback)
    let date = req.query.date;
    date = new Date(date).toISOString();
    const result = await DailyProduct.getByDate(date);
    console.log('result in model', result)
    callback(null, result);
  }
};
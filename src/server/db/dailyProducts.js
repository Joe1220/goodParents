const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DailyProductsSchema = new mongoose.Schema({
  date:Date,
  items:[{type: Schema.Types.ObjectId, ref: "Product" }]
});

module.exports = mongoose.model('DailyProduct', DailyProductsSchema);
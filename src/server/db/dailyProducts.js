const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('./product');

const DailyProductsSchema = new mongoose.Schema({
  date: String,
  items: [{
    type: Schema.Types.ObjectId,
    ref: "Product"
  }]
}, {
  collection: "dailyProducts"
});

DailyProductsSchema.statics.getByDate = function (date) {
  return this.find({
    date: date
  }).populate({
    path: "items",
    options: {
      sort: {
        agezone: 1
      }
    }
  }).exec();
}

module.exports = mongoose.model('DailyProduct', DailyProductsSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('./product');
var deepPopulate = require('mongoose-deep-populate')(mongoose)

const DailyProductsSchema = new mongoose.Schema({
  date: String,
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  }]
}, {
  collection: "dailyProducts"
});

DailyProductsSchema.plugin(deepPopulate);

DailyProductsSchema.statics.getByDate = function (date) {
  const newDate = date.split('T')[0];
  return this.find({
    date: newDate
  })
  .deepPopulate("items")
  .exec()
}


module.exports = mongoose.model('DailyProduct', DailyProductsSchema);

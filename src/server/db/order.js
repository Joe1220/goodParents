const mongoose = require('mongoose');

const Orderschema = new mongoose.Schema({
  OrderNumber: String,
  OrderDate: Date,
  OrderItem: [{name: String, Number: Number}],
  OrderPrice: Number,
  OrderProcessingStatus: Boolean,
  OrderBuyer: String
});

module.exports = mongoose.model('Order', Orderschema);
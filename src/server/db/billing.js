const mongoose = require('mongoose');

const Billingschema = new mongoose.Schema({
  BillingInformationCardType: [String], // ['신용카드', '체크카드']
  BillingCardNumber: Number,
  BillingExpirationDate: Date,//(월/연도)
  BillingName: String,
  BillingDate: Number,
  BillingMonth: Number,
  BillingYear: Number
});

module.exports = mongoose.model('Billing', Billingschema);
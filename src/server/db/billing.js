const mongoose = require('mongoose');

const Billingschema = new mongoose.Schema({
  BillingInformationCardType: Number, //신용카드만 하자. 숫자 0으로
  BillingCardNumber: Number,
  BillingExpirationDate: String,//(월/연도)
  BillingName: String,
  BillingDate: Date//내가 결제하는 날짜
});

module.exports = mongoose.model('Billing', Billingschema);
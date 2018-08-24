const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Billingschema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  billingType: { type: Number, default: 0 }, //신용카드만 하자. 숫자 0으로
  cardNumber: Number,
  expYear: Number,
  expMonth: Number,
  CVC: Number,
  name: String
});

module.exports = mongoose.model('Billing', Billingschema);
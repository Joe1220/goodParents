const mongoose = require('mongoose');

const Exchangeschema = new mongoose.Schema({
  ExchangeType: [String], //[오배송, 배송지연, 아이가 먹지 않음, 상함, 변심]
  ExchangeItem: [{date: Date, item: String, Number: Number}],
  ExchangeReason: String,
  ExchangeFirm: [String],
  ExchangeInformation: [{name: String, adress: String, phone: Number, homePhone: Number}],
  ExchangeRequestDate: Date,
  ExchangeProcessingStatus: Boolean,
  ExchangeDeliveryStatus: Boolean,
});

module.exports = mongoose.model('Exchange', Exchangeschema);
const mongoose = require('mongoose');

const Exchangeschema = new mongoose.Schema({
  ExchangeType: Number, //[오배송, 배송지연, 아이가 먹지 않음, 상함, 변심]
  ExchangeItem: { type: Schema.Types.ObjectId, ref: 'Cart' }, //시스템이 생성한 카트 
  ExchangeReason: String,
  ExchangeFirm: String,
  ExchangeInformation: [{name: String, adress: String, phone: String, homePhone: String}],
  ExchangeRequestDate: new Date().now(),
  ExchangeProcessingStatus: Number,//0,1,2 교환준비중, 교환 중, 교환 완료
  ExchangeDeliveryStatus: Number,//0,1,2 준비중, 배송중, 배송완료
  visible: { type: Boolean, default: true }
});

module.exports = mongoose.model('Exchange', Exchangeschema);
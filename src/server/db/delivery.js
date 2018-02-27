const mongoose = require('mongoose');

const Deliveryschema = new mongoose.Schema({
DeliveryCodeZip: Number,
DeliveryAdress: String, //서울시 서초구 방배동
DeliveryAdressDetail: String, //00아파트, 00동, 00호
DeliveryChecked: Boolean, //어떤 배송지가 디폴트로 설정되어 있는지
});

module.exports = mongoose.model('Delivery', Deliveryschema);

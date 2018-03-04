const mongoose = require('mongoose');

const Orderschema = new mongoose.Schema({
  // OrderNumber:ObjectId로 사용
  OrderDate: Date,
  OrderItem: { type: Schema.Types.ObjectId, ref: 'Cart' },
  OrderProcessingStatus: Number,//0: 배송준비중, 1: 배송중, 2: 배송완료
  OrderBuyer: { type: Schema.Types.ObjectId, ref: 'User' },
  OrdererInfo: {
    addressee: String,
    telephone: String,
    zipCode: Number,
    address: String,
    addressDetail: String,
    deliveryMessage: String
  }
});

module.exports = mongoose.model('Order', Orderschema);
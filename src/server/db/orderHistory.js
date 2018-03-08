const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderHistorySchema = new mongoose.Schema({
  // OrderNumber:ObjectId로 사용
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now },
  items: [
    { product: { type: Schema.Types.ObjectId, ref: "Product" }, qty: Number, checked: { type: Boolean, default: true } } //checked 나중에 취소할 떄를 위해서 작성
  ],
  status: { type: Number, default: 0 },//0: 배송준비중, 1: 배송중, 2: 배송완료
  ordererInfo: {
    recipient: String,
    telephone: String,
    zipCode: Number,
    address: String,
    addressDetail: String,
    deliveryMessage: String,
    billingType: { type: Number, default: 0 }, //신용카드만 하자. 숫자 0으로
    cardNumber: Number,
    expYear: Number,
    expMonth: Number,
    CVC: Number,
    name: String
  }
});

module.exports = mongoose.model('OrderHistory', OrderHistorySchema);
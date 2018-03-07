const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require("./user");

const DeliverySchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    delivery: [{
      codeZip: String,
      address: String, //서울시 서초구 방배동
      addressDetail: String, //00아파트, 00동, 00호
      checked: Boolean, //어떤 배송지가 디폴트로 설정되어 있는지
    }]
  },
  {
    collection: "deliveries"
  }
);

module.exports = mongoose.model('Delivery', DeliverySchema);

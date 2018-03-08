const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExchangeSchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    category: Number, // [오배송, 배송지연, 아이가 먹지 않음, 상함, 변심]
    reason: String,
    items: [
      {
        product: { type: Schema.Types.ObjectId, ref: "OrderHistory" },
        qty: Number
      }
    ],
    deliveryFirm: Number,
    deliveryInfo: {
      name: String,
      adress: String,
      phone: String,
      homePhone: String
    },
    date: { type: Date, default: Date.now },
    processingStatus: { type: Number, default: 0 }, // 0, 1, 2 교환준비중, 교환중, 교환 완료
    deliveryStatus: { type: Number, default: 0 } // 0, 1, 2 준비중, 배송중, 배송완료
  },
  {
    collection: "exchanges"
  }
);

module.exports = mongoose.model("Exchange", ExchangeSchema);

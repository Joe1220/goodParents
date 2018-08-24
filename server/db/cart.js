const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user");
const Product = require("./product");

const CartSchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    cart: [
      {
        year: Number,
        month: Number,
        day: Number,
        _id: { type: Schema.Types.ObjectId, ref: "Product" },
        qty: { type: Number, default: 1 },
        checked: { type: Boolean, default: true }
      }
    ]
  },
  {
    collection: "carts"
  }
);

module.exports = mongoose.model("Cart", CartSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user");
const Product = require("./product");

const CartSchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    cart: [
      { product: { type: Schema.Types.ObjectId, ref: "Product" }, qty: Number }
    ]
  },
  {
    collection: "carts"
  }
);

module.exports = mongoose.model("Cart", CartSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require("./user");

const BabySchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    baby: {
      name: String,
      old: Date, //태어난 날짜
      sex: Number, //['0, boy', '1, girl']
      weight: Number,
      height: Number,
    }
  },
  {
    collection: "users"
  }
);

module.exports = mongoose.model('Baby', BabySchema);
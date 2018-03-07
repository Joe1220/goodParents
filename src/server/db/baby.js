const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require("./user");

const BabySchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    baby: [{
      name: String,
      date: String, //"2008-01-01"
      sex: String, //['0, boy', '1, girl']
      weight: Number, //kg
      height: Number,//cm
    }]
  },
  {
    collection: "babys"
  }
);

module.exports = mongoose.model('Baby', BabySchema);
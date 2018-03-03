const mongoose = require('mongoose');

const BabySchema = new mongoose.Schema({
  MyBabyName: String,
  MyBabyOld: Date, //태어난 날짜
  MyBabySex: Number, //['0, boy', '1, girl']
  MyBabyWeight: Number,
  MyBabyHeight: Number
});

module.exports = mongoose.model('Baby', BabySchema);
const mongoose = require('mongoose');

const Babyschema = new mongoose.Schema({
  MyBabyName: String,
  MyBabyOld: [String], //[2년,11개월]
  MyBabySex: [String], //['boy', 'girl']
  MyBabyWeight: Number,
  MyBabyHeight: Number
});

module.exports = mongoose.model('Baby', Babyschema);
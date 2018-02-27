const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Name: String,
  Telephone: Number,
  Email: String,
  UserImg: { data: Buffer, contentType: String },
  Id: String,
  Password: String,
  Authority: Number
});

module.exports = mongoose.model('User', userSchema);
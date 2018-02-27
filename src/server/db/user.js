const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  telephone: Number,
  email: String,
  userimg: { data: Buffer, contentType: String },
  id: String,
  password: String,
  authority: Number
});

module.exports = mongoose.model('User', userSchema);
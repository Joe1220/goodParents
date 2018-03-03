const mongoose = require('mongoose');

const CounselingSchema = new mongoose.Schema({
  CounselingService: Number,
  CounselingType: Number,
  CounselingTitle: String,
  Counselingtext: String,
  CounselingRegistrationDate: new Date().now(),
  CounselingWheterToAnswer: Boolean,
  CounselingAdmin: { type: Schema.Types.ObjectId, ref: 'Admin' }
});

module.exports = mongoose.model('Counseling', CounselingSchema);
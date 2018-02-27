const mongoose = require('mongoose');

const CounselingSchema = new mongoose.Schema({
  CounselingService: String,
  CounselingType: String,
  CounselingTitle: String,
  Counselingtext: String,
  CounselingRegistrationDate: Date,
  CounselingWheterToAnswer: Boolean
});

module.exports = mongoose.model('Counseling', CounselingSchema);
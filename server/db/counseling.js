const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CounselingSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  inquiry: [
    {
      category: Number,
      subcategory: Number,
      title: String,
      body: String,
      date: { type: Date, default: Date.now },
      answered: { type: Boolean, default: false },
      answerBody: { type: String, default: "" }
    }
  ]
});

module.exports = mongoose.model("Counseling", CounselingSchema);

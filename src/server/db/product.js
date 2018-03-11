const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
  "_id": { _$id: Schema.Types.ObjectId },
  "name": String,
  "subname:": String,
  "image": String,
  "price": Number,
  "calorie": Number,
  "agezone": Number,
  "ingredients": [{
    "_id": { _$id: Schema.Types.ObjectId},
    "name": String,
    "amounts": Number,
    "isAllergie": Boolean,
    "image": String
  }],
  "nutrients": [{
    "_id": { _$id: Schema.Types.ObjectId},
    "name": String,
    "amount": Number,
    "image": String
  }]
});

module.exports = mongoose.model('Product', ProductSchema);
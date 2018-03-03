const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  product: {
    "_id": { _$id: ObjectId },
    "name": String,
    "subname:": String,
    "image": String,
    "price": Number,
    "calorie": Number,
    "ingredients": [{
      "_id": { _$id: ObjectId},
      "name": String,
      "amounts": Number,
      "isAllergie": Boolean,
      "image": String
    }],
    "nutrients": [{
      "_id": { _$id: ObjectId},
      "name": String,
      "amount": Number,
      "image": String
    }]
  }
});

module.exports = mongoose.model('Product', ProductSchema);
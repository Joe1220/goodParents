const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
  date: Date,
  
});

module.exports = mongoose.model('Product', ProductsSchema);
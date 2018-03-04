const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  cart: [{ date: Date, totalPrice: Number, visible: Boolean }, [{ type: Schema.Types.ObjectId, ref: 'Product' }, { qty: Number }]]
});

module.exports = mongoose.model('Cart', CartSchema);

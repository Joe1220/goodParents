const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  date: Date,
  ordererInfo: { type: Schema.Types.ObjectId, ref: 'Orderer' },
  couponeCode: String,
  paymentInfo: { type: Schema.Types.ObjectId, ref: 'Billing' }
});

module.exports = mongoose.model('Payment', PaymentSchema);

// {
//   user_id : "asdf",
//   date: "2018-09-10 00:00:00",
//   ordererInfo: {
//     addressee: 'asdf',
//     telephone: '',
//     zipCode: '',
//     address: '',
//     addressDetail: '',
//     deliveryMessage: '', 
//   },
//   couponeCode: Number,
//   paymentInfo: {
//     paymentType: 'card',
//     paymentDetail: {
//       name: String,
//       cardNumber: Number,
//       cardExpDate: '00/00',
//       svc: Number
//     }
//   }
//   cart: [
//     {
//       date: "2018-09-01",
//       items: [a, b, c...]
//     },
//     {
//       date: "2018-09-02",
//       items: [d, e, f...]
//     }
//   ],
//   transactionId: Number
// }

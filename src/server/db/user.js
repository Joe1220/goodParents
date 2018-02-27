const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // 계정관리
  Name: String,
  Telephone: Number,
  Email: String,
  UserImg: { data: Buffer, contentType: String },
  Id: String,
  Password: String,
  Authority: Number,
  // 마이 질문 확인
  CounselingService: String,
  CounselingType: String,
  CounselingTitle: String,
  Counselingtext: String,
  CounselingRegistrationDate: Date,
  CounselingWheterToAnswer: Boolean,
  // 결제 정보
  BillingInformationCardType: [String], // ['신용카드', '체크카드']
  BillingCardNumber: Number,
  BillingExpirationDate: Date,//(월/연도)
  BillingName: String,
  BillingDate: Number,
  BillingMonth: Number,
  BillingYear: Number,
  // 아이 관리
  MyBabyName: String,
  MyBabyOld: [String], //[2년,11개월]
  MyBabySex: [String], //['boy', 'girl']
  MyBabyWeight: Number,
  MyBabyHeight: Number,
  // 배송지 정보
  DeliveryCodeZip: Number,
  DeliveryAdress: String, //서울시 서초구 방배동
  DeliveryAdressDetail: String, //00아파트, 00동, 00호
  DeliveryChecked: Boolean, //어떤 배송지가 디폴트로 설정되어 있는지
  // 교환 신청
  ExchangeType: [String], //[오배송, 배송지연, 아이가 먹지 않음, 상함, 변심]
  ExchangeItem: [{date: Date, item: String, Number: Number}],
  ExchangeReason: String,
  ExchangeFirm: [String],
  ExchangeInformation: [{name: String, adress: String, phone: Number, homePhone: Number}],
  ExchangeRequestDate: Date,
  ExchangeProcessingStatus: Boolean,
  ExchangeDeliveryStatus: Boolean,
  // 주문 확인
  OrderNumber: String,
  OrderDate: Date,
  OrderItem: [{name: String, Number: Number}],
  OrderPrice: Number,
  OrderProcessingStatus: Boolean,
  OrderBuyer: String
  // 장바구니
});

module.exports = mongoose.model('User', userSchema);
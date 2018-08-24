const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
  name: String ,
  telephone: { type: String, default: null },
  email: String,
  userimg: { type: String, default: '' },
  password: String,
  admin: { type: Boolean, default: false }
  },
  {
  collection: "users"
  }
);

// create new User document
userSchema.statics.create = function (email, name, password) {
  const upperThis = this;
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds).then(function (hashed) {
    const user = new upperThis({
      email,
      name,
      password: hashed
    });
    return user.save();
  });
}
// find one user by using username
userSchema.statics.findOneByEmail = function (email) {
  return this.findOne({
    email
  }).exec()
}
userSchema.statics.findOneByEmailAndName = function (email, name) {
  return this.findOne({
    email: email,
    name: name
  }).exec()
}
// verify the password of the User documment
userSchema.methods.verify = function (password) {
  // return this.password === password;
  const upperThis = this;
  return bcrypt.compare(password, upperThis.password)
  .then(function(result) {
    return result;
  });
}

userSchema.methods.assignAdmin = function () {
  this.admin = true
  return this.save()
}
userSchema.methods.updateUser = function (userinfo) {
  this.name = userinfo.name
  this.telephone = userinfo.telephone;
  this.email = userinfo.email;
  return this.save()
}
module.exports = mongoose.model('User', userSchema);
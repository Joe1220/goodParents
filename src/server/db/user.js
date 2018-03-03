const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, default: '회원' },
  telephone: { type: Number, default: null },
  email: String,
  userimg: { type: String, default: '' },
  password: String,
  admin: { type: Boolean, default: false }
});
// create new User document
userSchema.statics.create = function (email, password) {
  const upperThis = this;
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds).then(function (hashed) {
    const user = new upperThis({
      email,
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

module.exports = mongoose.model('User', userSchema);
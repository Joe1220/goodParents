const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, default: '회원' },
  telephone: { type: Number, default: null },
  email: String,
  userimg: { type: String, default: '' },
  id: { type: String, default: '' },
  password: String,
  admin: { type: Boolean, default: false }
});
// create new User document
userSchema.statics.create = function(email, password) {
  const user = new this({
      email,
      password
  })

  // return the Promise
  return user.save()
}
// find one user by using username
userSchema.statics.findOneByEmail = function(email) {
  return this.findOne({
    email
  }).exec()
}

// verify the password of the User documment
userSchema.methods.verify = function(password) {
  return this.password === password
}

userSchema.methods.assignAdmin = function() {
  this.admin = true
  return this.save()
}

module.exports = mongoose.model('User', userSchema);
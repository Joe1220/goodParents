const User = require("../db/user.js");


module.exports = {
  register: async (req, res, callback) => {
    const { email, password } = req.body;
    // create a new user if does not exist
    const create = (results) => {
      if (results) {
        throw new Error('email exists')
      } else {
        return User.create(email, password)
      }
    }
    // respond to the client
    const respond = (result) => {
      res.json({
        message: 'registered successfully',
        admin: result.admin
      })
    }
    // run when there is an error (email exists)
    const onError = (error) => {
      res.status(409).json({
        message: error.message
      })
    }
    callback(null, await User.findOneByEmail(email)
    .then(create)
    .then(respond)
    .catch(onError));
  }
};
const User = require("../db/user.js");
const jwt = require("jsonwebtoken");

module.exports = {
  register: async (req, res, callback) => {
    const { email, name, password } = req.body;
    // create a new user if does not exist
    const create = results => {
      if (results) {
        throw new Error("user exists");
      } else {
        return User.create(email, name, password);
      }
    };
    // respond to the client
    const respond = result => {
      res.json({
        message: "registered successfully",
        admin: result.admin
      });
    };
    // run when there is an error (email exists)
    const onError = error => {
      res.status(400).json({
        message: error.message
      });
    };
    callback(
      null,
      await User.findOneByEmailAndName(email, name)
        .then(create)
        .then(respond)
        .catch(onError)
    );
  },

  login: async (req, res, callback) => {
    const { email, password } = req.body;
    const secret = req.app.get("jwt-secret");
    // check the user info & generate the jwt
    const check = user => {
      if (!user) {
        // user does not exist
        throw new Error("login failed");
      } else {
        // user exists, check the password
        if (user.verify(password)) {
          // create a promise that generates jwt asynchronously
          const p = new Promise((resolve, reject) => {
            jwt.sign(
              {
                email: user.email,
                admin: user.admin
              },
              secret,
              {
                expiresIn: "1d",
                issuer: "goodParents",
                subject: "userInfo"
              },
              (err, token) => {
                if (err) reject(err);
                const result = {
                  token: token,
                  name: user.name,
                  admin: user.admin
                };
                resolve(result);
              }
            );
          });
          return p;
        } else {
          throw new Error("login failed");
        }
      }
    };
    // respond the token
    const respond = (result) => {
      const options = {
        maxAge: 1000 * 60 * 60, // would expire after 60 minutes
        //httpOnly: true, // The cookie only accessible by the web server
        signed: true // Indicates if the cookie should be signed
      };
      res.cookie("token", result.token, options);
      res.json({
        message: "logged in successfully",
        name: result.name,
        admin: result.admin
      });
    };
    // error occured
    const onError = error => {
      res.status(403).json({
        message: error.message
      });
    };
    callback(
      null,
      await User.findOneByEmail(email)
        .then(check)
        .then(respond)
        .catch(onError)
    );
  },
  check: (req, res, callback) => {
    callback(
      null,
      res.send({
        success: true,
        info: req.decoded
      })
    );
  }
};

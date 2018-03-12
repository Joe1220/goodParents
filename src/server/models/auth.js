const User = require("../db/user.js");
const jwt = require("jsonwebtoken");

const cookieOptions = {
  maxAge: 1000 * 60 * 60 * 24, // would expire after 1 day
  httpOnly: true, // The cookie only accessible by the web server
  signed: true // Indicates if the cookie should be signed
};

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
        message: "registered successfully"
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
        throw new Error("login failed. user does not exist.");
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
                expiresIn: "7d",
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
          throw new Error("login failed. wrong password.");
        }
      }
    };
    // respond the token
    const respond = result => {
      res.cookie("token", result.token, cookieOptions);
      res.json({
        message: "log in successfully",
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
  },

  logout: (req, res, callback) => {
    res.clearCookie("token", cookieOptions);
    res.set("Content-Type", "text/javascript");
    callback(null, "window.sessionStorage.clear();");
  }
};

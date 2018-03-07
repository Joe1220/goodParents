const User = require("../db/user");
const jwt = require("jsonwebtoken");

const cookieOptions = {
  maxAge: 1000 * 60 * 60 * 24, // would expire after 1 day
  httpOnly: true, // The cookie only accessible by the web server
  signed: true // Indicates if the cookie should be signed
};

module.exports = {
  get: async (req, res, callback) => {
    const email = req.decoded.email;
    callback(
      null,
      await User.findOneByEmail(email)
        .then((results) => {
          return { name: results.name, telephone: results.telephone, email: results.email }
        })
        .catch(error => {
          throw new Error(error);
        })
    );
  },
  put: async (req, res, callback) => {
    const email = req.decoded.email;
    // const p = new Promise((resolve, reject) => {

    // });
    // return p;
    callback(
      null,
      await User.findOneByEmail(email)
        .then((userinfo) => {
          const { name, telephone, email } = req.body
          const info = { name, telephone, email }
          userinfo.updateUser(info);
          return { info, userinfo };
        })
        .then((obj) => {
          const secret = req.app.get("jwt-secret");
          return new Promise((resolve, reject) => {
            jwt.sign(
              {
                email: obj.info.email,
                admin: obj.userinfo.admin
              },
              secret,
              {
                expiresIn: "1d",
                issuer: "goodParents",
                subject: "userInfo"
              },
              (error, token) => {
                if (error) reject(error);
                const result = {
                  token: token,
                  name: obj.info.name,
                  admin: obj.userinfo.admin
                };
                resolve(result);
              }
            );
          });
        }
        )
        .then((result) => {
          res.cookie("token", result.token, cookieOptions);
          res.json({
            success: true,
            name: result.name,
            admin: result.admin
          })
        }
        )
    );
  }
};
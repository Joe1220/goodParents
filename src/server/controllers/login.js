var LoginModels = require("../models/login");

module.exports = {
  post: (req, res) => {
    LoginModels.post(req, (error, results) => {
      if(error) console.error(error);
      // console.log(req.cookies);
      // res.cookie('cookie_key11', 'cookie_value11', { expires: new Date(Date.now()+900000), httpOnly: true });
      // res.json(results);
      console.log(results)
    });
  }
};
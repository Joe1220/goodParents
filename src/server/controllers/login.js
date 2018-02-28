var LoginModels = require("../models/login");

module.exports = {
  post: (req, res) => {
    LoginModels.post(req, (error, results) => {
      if(error) console.error(error);
      // console.log(req.cookies);
      // res.cookie('cookie_key11', 'cookie_value11', { expires: new Date(Date.now()+900000), httpOnly: true });
      results[0] = JSON.parse(JSON.stringify(results[0]));
      if(results.length === 1){
        res.json([results[0].name, results[0].autority]);
      }
    });
  }
};
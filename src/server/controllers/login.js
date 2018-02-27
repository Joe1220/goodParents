var LoginModels = require("../models/login");

module.exports = {
  get: (req, res) => {
    LoginModels.get(req, (error, results) => {
      if(error) console.error(error);
      if(!results){
        res.send(false)
      }
      res.json(results);
    });
  }
};
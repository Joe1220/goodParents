const db = require('../db');

module.exports = {
  idol: {
    get: function (callback) {
      db.query('SELECT people.id, people.name, people.groupid, people.count, groups.group_name, groups.group_name_kr, groups.debut_year, groups.img FROM people INNER JOIN groups ON people.groupid = groups.id;', function (err, results) {
          callback(err, results);
      })
    }
  }
};
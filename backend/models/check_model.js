const db = require('../database');

const check = {
  getByUrl: function(url, callback) {
    return db.query('select * from views where url=?', [url], callback);
  }
};
module.exports = check;
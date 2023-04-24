const db = require('../database');

const custom = {
  getByurl: function(url, callback) {
    return db.query('select * from views where url=?', [url], callback);
  }
};
module.exports = custom;
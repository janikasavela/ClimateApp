const db = require('../database');

const profile = {

  deleteUser: function(username, callback) {
    return db.query('delete from users where username=?', [username], callback);
  }
};
module.exports = profile;
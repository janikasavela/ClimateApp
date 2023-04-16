const db = require('../database');

const bcrypt = require('bcryptjs');

const saltRounds=10;

const register = {
  addUser: function(add_data, callback) {
    bcrypt.hash(add_data.password, saltRounds, function(err, hashedPinKoodi){
    return db.query(
      'insert into users (username,password) values(?,?)',
      [add_data.username, hashedPinKoodi],
      callback);
    });
  }
};
module.exports = register;
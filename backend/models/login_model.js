const db = require('../database');

const bcrypt = require('bcryptjs');

const saltRounds=10;

const login = {
  checkPassword: function(username, callback) {
    return db.query('SELECT password FROM users WHERE username = ?',[username], callback); 
  }
};

module.exports = login;
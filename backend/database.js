const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'dataUser',
  password: 'netpass',
  database: 'data'
});
module.exports = connection;


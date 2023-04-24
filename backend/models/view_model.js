const db = require('../database');

const view = {
  getByusername: function(username, callback) {
    return db.query('select * from views where username=?', [username], callback);
  },
  add: function(add_data, callback) {
    return db.query(
      'insert into views (url, column_layout, visualizations, username, title, decs1, desc2, desc3, desc4, desc5 ) values(?,?,?,?,?,?,?,?,?,?)',
      [add_data.url, add_data.columnLayout, add_data.vToSave, add_data.user, add_data.title, add_data.desc1, add_data.desc2, add_data.desc3, add_data.desc4, add_data.desc5],
      callback);
  }
};
module.exports = view;
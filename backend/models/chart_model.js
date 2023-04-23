const db = require('../database');

const chart = {
  getV1Annual: function(callback) {
    return db.query('select * from v1annual', callback);
  },
  getV1Monthly: function(callback) {
    return db.query('select * from v1monthly', callback);
  },
  getV1R: function(callback) {
    return db.query('select * from v1reconstruction', callback);
  },
  getV2annual: function(callback) {
    return db.query('select * from v2atmospheric_annual;', callback);
  },
  getV2monthly: function(callback) {
    return db.query('select * from v2atmospheric_monthly; ', callback);
  },
  getV2ice1: function(callback) {
    return db.query('select * from v2ice_core1;', callback);
  },
  getV2ice2: function(callback) {
    return db.query('select * from v2ice_core2;', callback);
  },
  getV2ice3: function(callback) {
    return db.query('select * from v2ice_core3', callback);
  },
  getV3carbon: function(callback) {
    return db.query('select * from v3carbon_dataa', callback);
  },
  getV3global: function(callback) {
    return db.query('select * from v3global_data', callback);
  }


};
module.exports = chart;
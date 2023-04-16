const express = require('express');
const router = express.Router();
const register = require('../models/register_model');

router.post('/', 
function(request, response) {
  register.addUser(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(request.body);
    }
  });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const profile = require('../models/profile_model');

router.delete('/:username', 
function(request, response) {
  profile.deleteUser(request.params.username, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;
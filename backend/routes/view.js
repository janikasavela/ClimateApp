const express = require('express');
const router = express.Router();
const view = require('../models/view_model');

router.get('/:username?',
    function (request, response) {
        view.getByusername(request.params.username, function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult[0]);
            }
        })
    });

router.post('/', 
function(request, response) {
  view.add(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(request.body);
    }
  });
});

module.exports = router;
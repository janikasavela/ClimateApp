const express = require('express');
const router = express.Router();
const check = require('../models/check_model');

router.get('/:url?',
    function (request, response) {
        check.getByUrl(request.params.url, function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    });

module.exports = router;
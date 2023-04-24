const express = require('express');
const router = express.Router();
const custom = require('../models/custom_model');

router.get('/:url?',
    function (request, response) {
        custom.getByurl(request.params.url, function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult[0]);
            }
        })
    });

module.exports = router;
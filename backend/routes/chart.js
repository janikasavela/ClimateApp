const express = require('express');
const router = express.Router();
const chart = require('../models/chart_model');

router.get('/v1Annual',
    function (request, response) {
        chart.getV1Annual(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    });

    router.get('/v1Monthly',
    function (request, response) {
        chart.getV1Monthly(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    });

    router.get('/R',
    function (request, response) {
        chart.getV1R(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    });

    router.get('/v2annual',
    function (request, response) {
        chart.getV2annual(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    });

    router.get('/v2monthly',
    function (request, response) {
        chart.getV2monthly(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    });

    router.get('/v2ice1',
    function (request, response) {
        chart.getV2ice1(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    });

    router.get('/v2ice2',
    function (request, response) {
        chart.getV2ice2(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    });

    router.get('/v2ice3',
    function (request, response) {
        chart.getV2ice3(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    });

    router.get('/v3carbon',
    function (request, response) {
        chart.getV3carbon(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    });

    router.get('/v3global',
    function (request, response) {
        chart.getV3global(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    });

    router.get('/v3events',
    function (request, response) {
        chart.getV3events(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    });

    
    router.get('/v4',
    function (request, response) {
        chart.getV4(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    });

    router.get('/v5sector',
    function (request, response) {
        chart.getV5sector(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    });

    router.get('/v5subsector',
    function (request, response) {
        chart.getV5subsector(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    });

    router.get('/v5subsectorF',
    function (request, response) {
        chart.getV5subsectorF(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    });

module.exports = router;
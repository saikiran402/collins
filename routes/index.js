const express = require('express');

let router = express.Router();

router.get('/', function(req, res) {
    res.render('index', { analytics: process.env.GOOGLE_ANALYTICS_TAG, urn: process.env.FORGE_MODEL_URN });
});

router.get('/engine', function(req, res) {
    res.render('p2', { analytics: process.env.GOOGLE_ANALYTICS_TAG, urn: process.env.FORGE_MODEL_URN });
});

router.get('/home', function(req, res) {
    res.render('home', { analytics: process.env.GOOGLE_ANALYTICS_TAG, urn: process.env.FORGE_MODEL_URN });
});

module.exports = router;
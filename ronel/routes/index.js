const express = require('express');
const { submitInquiry } = require('../controllers/contactController');
const route = express.Router();

route.get('/', (req, res, next) => {
    res.render('index', {});
});

// contact routes

route.get('/get-started', (req, res, next) => {
    res.render('pages/contact/get-started', {});
});
route.post('/get-started', submitInquiry);


module.exports = route;
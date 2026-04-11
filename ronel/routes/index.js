const express = require('express');
const { submitInquiry, submitQuestion } = require('../controllers/contactController');
const route = express.Router();

route.get('/', (req, res, next) => {
    res.render('index');
});

route.get('/get-started', (req, res, next) => {
    res.render('pages/contact/get-started');
});

// contact routes

route.post('/get-started', submitInquiry);
route.post('/new-question', submitQuestion);


module.exports = route;
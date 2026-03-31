const express = require('express');
const route = express.Router();


// Home page renders index.ejs
route.get('/', (req, res, next) => {
    res.render('index', {});
});

// About page
route.get('/about', (req, res, next) => {
    res.render('about', {});
});

// Industries page
route.get('/industries', (req, res, next) => {
    res.render('industries', {});
});

// Testimonial page
route.get('/testimonial', (req, res, next) => {
    res.render('testimonial', {});
});

// route.get('/index-2', (req, res, next) => {
//     res.render('index-2', {});
// });

// route.get('/index-3', (req, res, next) => {
//     res.render('index-3', {});
// });

// route.get('/index-4', (req, res, next) => {
//     res.render('index-4', {});
// });

// route.get('/index-5', (req, res, next) => {
//     res.render('index-5', {});
// });

// route.get('/index-6', (req, res, next) => {
//     res.render('index-6', {});
// });

// route.get('/index-7', (req, res, next) => {
//     res.render('index-7', {});
// });

// route.get('/index-8', (req, res, next) => {
//     res.render('index-8', {});
// });

route.get('/login', (req, res, next) => {
    res.render('login', {});
});

route.get('/signup', (req, res, next) => {
    res.render('signup', {});
});

route.get('/reset', (req, res, next) => {
    res.render('reset', {});
});

// contact routes

route.get('/get-started', (req, res, next) => {
    res.render('pages/contact/get-started', {});
});


module.exports = route;
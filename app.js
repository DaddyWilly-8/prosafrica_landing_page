require('dotenv').config({ path: require('path').join(__dirname, '.env') });
const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const upload = require('express-fileupload');
const route = require('./routes/index');

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(upload());

app.use(express.json());
app.use(session({ resave: false, saveUninitialized: true, secret: 'nodedemo' }));
app.use(flash());
app.use(cookieParser());

// expose flash messages to all views
app.use((req, res, next) => {
    res.locals.success = req.flash('success')[0] || null;
    res.locals.error = req.flash('error')[0] || null;
    next();
});
app.use(express.urlencoded({ extended: true }))

app.use(express.static(__dirname + '/public'));

app.use('/', route);

const http = require("http").createServer(app);

const port = 3000

http.listen(port, () => {
    console.log(`Server running on port ${port}`)
    console.log(`http://localhost:${port}`)
});
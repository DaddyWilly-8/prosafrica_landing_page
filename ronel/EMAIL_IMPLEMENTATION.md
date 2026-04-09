# Email Implementation Review

## What's Wrong

### 1. `config/mailer.js` — ES Module syntax in a CommonJS project
```js
// ❌ Wrong — this project uses CommonJS (require/module.exports)
export default transporter

// ✅ Fix
module.exports = transporter
```

---

### 2. `services/mailService.js` — Three problems

**a) Mixed ES Module + CommonJS syntax**
```js
// ❌ Wrong — can't mix import and require in CommonJS
import transporter from '../config/mailer';
const ejs = require('ejs')
export const sendMail = ...

// ✅ Fix — use require/module.exports throughout
const transporter = require('../config/mailer');
const ejs = require('ejs');
const sendMail = async (...) => { ... }
module.exports = { sendMail };
```

**b) Wrong `__dirname` path for EJS template**
```js
// ❌ Wrong — __dirname here points to /services/, not the project root
ejs.renderFile(__dirname + '/views/emails/inquiryEmail.ejs', ...)

// ✅ Fix — resolve from project root
const path = require('path');
ejs.renderFile(path.join(__dirname, '../views/emails/inquiryEmail.ejs'), ...)
```

**c) `sendMail()` accepts no data — template receives no variables**
```js
// ❌ Wrong — no form data passed to the template
export const sendMail = (from, to, subject) => {
    ejs.renderFile(..., (err, template) => { ... }) // no data object!
}

// ✅ Fix — pass a data object as second argument to renderFile
ejs.renderFile(templatePath, { email, phone, organization, industry, description }, callback)
```

**d) `transporter.sendMail()` is commented out — email never actually sends**
```js
// ❌ This means the function does nothing except log "email sent"
// transporter.sendMail(mailOptions, ...)
console.log('email sent successfully') // fake success
```

---

### 3. `controllers/` — Empty, nothing wired up
The controllers directory exists but is empty. No controller handles the POST request from the form.

---

### 4. `routes/index.js` — No POST route for the form
```js
// ❌ Missing — the form has no server-side handler
route.get('/get-started', ...)  // only GET exists, no POST
```

---

### 5. `views/pages/contact/get-started.ejs` — Form has no `action` or `method`
```html
<!-- ❌ Wrong — form will not POST anywhere -->
<form style="background-color: white;" id="inquiryForm">

<!-- ✅ Fix -->
<form action="/get-started" method="POST" id="inquiryForm">
```

---

### 6. `public/js/getStarted.js` — JS intercepts submit but does nothing
```js
// ❌ Prevents default but never sends data to the server
inquiryForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('form submitted') // data goes nowhere
})
```
Either remove this file and let the form POST naturally, or use `fetch()` properly.

---

### 7. `app.js` — No `.env` loader, no `express.urlencoded` middleware
```js
// ❌ Missing — env variables like MAIL_HOST are undefined at runtime
// ❌ Missing — form POST body won't be parsed without this
app.use(express.urlencoded({ extended: true }));
```

---

### 8. `views/emails/inquiryEmail.ejs` — No dynamic variables used
```html
<!-- ❌ Template is fully static — no form data is shown -->
<h1>We have received your inquiry</h1>
```
EJS templates support `<%= variable %>` syntax. The user's data should appear in the email.

---

## Clean Implementation Example

### Flow
```
Form POST /get-started
  → routes/index.js (POST handler)
    → controllers/contactController.js
      → services/mailService.js
        → config/mailer.js (transporter)
          → views/emails/inquiryEmail.ejs (rendered template)
```

---

### `app.js` — add these two lines
```js
require('dotenv').config(); // load .env variables — add at very top

app.use(express.urlencoded({ extended: true })); // parse form POST body
```

---

### `config/mailer.js`
```js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

module.exports = transporter;
```

---

### `services/mailService.js`
```js
const transporter = require('../config/mailer');
const ejs = require('ejs');
const path = require('path');

const sendInquiryEmail = (data) => {
    return new Promise((resolve, reject) => {
        const templatePath = path.join(__dirname, '../views/emails/inquiryEmail.ejs');

        ejs.renderFile(templatePath, data, (err, html) => {
            if (err) return reject(err);

            const mailOptions = {
                from: 'info@prosafrica.co.tz',
                to: 'info@prosafrica.co.tz',
                subject: `New Inquiry from ${data.organization}`,
                html: html,
            };

            transporter.sendMail(mailOptions, (err, info) => {
                if (err) return reject(err);
                resolve(info);
            });
        });
    });
};

module.exports = { sendInquiryEmail };
```

---

### `controllers/contactController.js`
```js
const { sendInquiryEmail } = require('../services/mailService');

const submitInquiry = async (req, res) => {
    const { email, phone, organization_name, industry, description } = req.body;

    try {
        await sendInquiryEmail({ email, phone, organization: organization_name, industry, description });
        res.render('pages/contact/get-started', { success: true, error: null });
    } catch (err) {
        console.error('Email error:', err);
        res.render('pages/contact/get-started', { success: false, error: 'Failed to send. Try again.' });
    }
};

module.exports = { submitInquiry };
```

---

### `routes/index.js` — add POST route
```js
const { submitInquiry } = require('../controllers/contactController');

route.post('/get-started', submitInquiry);
```

---

### `views/emails/inquiryEmail.ejs` — use the data
```html
<body>
    <h2>New Inquiry Received</h2>
    <p><strong>Email:</strong> <%= email %></p>
    <p><strong>Phone:</strong> <%= phone %></p>
    <p><strong>Organization:</strong> <%= organization %></p>
    <p><strong>Industry:</strong> <%= industry %></p>
    <p><strong>Description:</strong> <%= description %></p>
</body>
```

---

### `views/pages/contact/get-started.ejs` — form tag fix
```html
<!-- Add action and method. Also show feedback using EJS -->
<form action="/get-started" method="POST" id="inquiryForm">

<!-- Show success/error messages at the top of the form -->
<% if (typeof success !== 'undefined' && success) { %>
    <div class="alert alert-success">Inquiry sent successfully!</div>
<% } %>
<% if (typeof error !== 'undefined' && error) { %>
    <div class="alert alert-danger"><%= error %></div>
<% } %>
```

> **Note:** When using EJS variables (`success`, `error`), the route's `res.render()` 
> must always pass them — even as `null` — or EJS will throw a reference error.
> Example: `res.render('pages/contact/get-started', { success: null, error: null })`
> on the GET route too.

---

### `.env` file (create at `ronel/.env`)
```
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your@email.com
MAIL_PASSWORD=your_app_password
```

> Install dotenv: `npm install dotenv`  
> Add `.env` to `.gitignore` — never commit credentials.


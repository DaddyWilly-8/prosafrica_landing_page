const nodeMailer = require("nodemailer");

const transporter = nodeMailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    },
    // tls: {
    //     // Accept self-signed or invalid certificates (disable on production)
    //     rejectUnauthorized: false,
    // },
    secured: true,
    disableFileAccess: false,
    disableUrlAccess: false
});

module.exports = transporter
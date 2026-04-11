const transporter = require("../config/mailer")
const ejs = require('ejs')
const path = require("path")

const sendInquiryEmail = (data) => {
    return new Promise((resolve, reject) => {
        const templatePath = path.join(__dirname, '../views/emails/inquiryEmail.ejs');

        ejs.renderFile(templatePath, data, (err, html) => {
            if (err) return reject(err);

            const mailOptions = {
                from: 'landing@proserp.co.tz',
                to: 'Info@prosafrica.co.tz',
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

const sendQuestionEmail = (data) => {
    return new Promise((resolve, reject) => {
        const templatePath = path.join(__dirname, '../views/emails/questionEmail.ejs');

        ejs.renderFile(templatePath, data, (err, html) => {
            if (err) return reject(err);

            const mailOptions = {
                from: 'landing@proserp.co.tz',
                to: 'Info@prosafrica.co.tz',
                subject: `New question from ${data.email}`,
                html: html,
            };

            transporter.sendMail(mailOptions, (err, info) => {
                if (err) return reject(err);
                resolve(info);
            });
        });
    });
};

module.exports = { sendInquiryEmail, sendQuestionEmail };
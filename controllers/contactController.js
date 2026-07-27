const { sendInquiryEmail, sendQuestionEmail } = require('../services/mailService');

const submitInquiry = async (req, res) => {
    const { full_name, email, phone, organization_name, industry, description } = req.body;

    try {
        const sendResponse = await sendInquiryEmail({ full_name, email, phone, organization: organization_name, industry, description });
        // console.log('sendResponse:', sendResponse);
        req.flash('success', 'Inquiry sent successfully!');
        res.redirect('/get-started');
    } catch (err) {
        console.error('Email error:', err);
        req.flash('error', 'Failed to send. Try again.');
        res.redirect('/get-started');
    }
};

const submitQuestion = async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        const sendResponse = await sendQuestionEmail({ name, email, subject, message });
        console.log('sendResponse:', sendResponse);
        req.flash('success', 'Question sent successfully!');
        res.redirect('/#contacts');
    } catch (err) {
        console.error('Email error:', err);
        req.flash('error', 'Failed to send. Try again.');
        res.redirect('/#contacts');
    }
};

module.exports = { submitInquiry, submitQuestion };
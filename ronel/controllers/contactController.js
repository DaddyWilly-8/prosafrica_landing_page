const { sendInquiryEmail } = require('../services/mailService');

const submitInquiry = async (req, res) => {
    const { email, phone, organization_name, industry, description } = req.body;

    try {
        const sendResponse = await sendInquiryEmail({ email, phone, organization: organization_name, industry, description });
        console.error('sendResponse:', sendResponse);
        res.render('pages/contact/get-started', { success: true, error: null });
        // return sendResponse
    } catch (err) {
        console.error('Email error:', err);
        res.render('pages/contact/get-started', { success: false, error: 'Failed to send. Try again.' });
    }
};

module.exports = { submitInquiry };
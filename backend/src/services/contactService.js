const Contact = require('../models/contact');

const createContact = async ({ name, email, phone, message }) => {
    const newContact = new Contact({ name, email, phone, message });
    return await newContact.save();
};

module.exports = { createContact };

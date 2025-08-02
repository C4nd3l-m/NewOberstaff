const Contact = require('../models/contact');

const createContact = async ({ name, email, message }) => {
    const newContact = new Contact({ name, email, message });
    return await newContact.save();
};

module.exports = { createContact };

const { createContact } = require('../services/contactService');

const submitContact = async (req, res) => {
    try {
        const { name, email, message, phone } = req.body;

        if (!name || !email || !message || !phone) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        await createContact({ name, email,phone, message });

        res.status(201).json({ message: 'Mensaje recibido con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error del servidor' });
    }
};

module.exports = { submitContact };

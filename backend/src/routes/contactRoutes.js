const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
const validateContact = require("../middlewares/validateContact");

router.post("/contact", validateContact, async (req, res) => {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: "Formulario enviado correctamente" });
});

module.exports = router;

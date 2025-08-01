const { body, validationResult } = require("express-validator");

const validateContact = [
    body("name").notEmpty().withMessage("El nombre es obligatorio"),
    body("email").isEmail().withMessage("Debe ser un email válido"),
    body("message")
        .isLength({ min: 10 })
        .withMessage("El mensaje debe tener al menos 10 caracteres"),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array().map((err) => err.msg),
            });
        }
    next();
    },
];

module.exports = validateContact;

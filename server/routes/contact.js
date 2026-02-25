// Routes du formulaire de contact

const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { sendContact } = require("../controllers/contactController");

const contactValidation = [
  body("nom").trim().notEmpty().withMessage("Le nom est requis."),
  body("prenom").trim().notEmpty().withMessage("Le prénom est requis."),
  body("email").trim().isEmail().withMessage("Email invalide."),
  body("message").trim().isLength({ min: 10 }).withMessage("Message trop court."),
  body("artisanId").notEmpty().isInt({ min: 1 }).withMessage("Artisan invalide."),
];

router.post("/", contactValidation, sendContact);

module.exports = router;
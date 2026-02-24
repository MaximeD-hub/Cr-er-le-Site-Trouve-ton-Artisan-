// Contrôleur du formulaire de contact

const { validationResult } = require("express-validator");
const Artisan = require("../models/Artisan");

// POST /api/contact
const sendContact = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        success: false,
        message: "Données invalides.",
        errors: errors.array(),
      });
    }

    const { nom, prenom, email, message, artisanId } = req.body;

    const artisan = await Artisan.findByPk(artisanId);
    if (!artisan) {
      return res.status(404).json({ success: false, message: "Artisan introuvable." });
    }

    // Log du message
    console.log("📧 Nouveau message de contact :", {
      de: `${nom} ${prenom} <${email}>`,
      artisan: artisan.nom,
      message,
    });

    res.status(200).json({
      success: true,
      message: "Message envoyé avec succès.",
    });
  } catch (error) {
    console.error("Erreur sendContact :", error);
    res.status(500).json({ success: false, message: "Erreur serveur." });
  }
};

module.exports = { sendContact };
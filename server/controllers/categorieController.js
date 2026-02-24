// Contrôleur des catégories et spécialités

const Categorie = require("../models/Categorie");
const Specialite = require("../models/Specialite");

// GET /api/categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Categorie.findAll({
      include: [{ model: Specialite, as: "specialites", attributes: ["id", "nom"] }],
      order: [["nom", "ASC"]],
    });

    res.json({ success: true, count: categories.length, data: categories });
  } catch (error) {
    console.error("Erreur getAllCategories :", error);
    res.status(500).json({ success: false, message: "Erreur serveur." });
  }
};

// GET /api/specialites
const getAllSpecialites = async (req, res) => {
  try {
    const { categorieId } = req.query;
    const where = categorieId ? { categorieId } : {};

    const specialites = await Specialite.findAll({
      where,
      include: [{ model: Categorie, as: "categorie", attributes: ["id", "nom"] }],
      order: [["nom", "ASC"]],
    });

    res.json({ success: true, count: specialites.length, data: specialites });
  } catch (error) {
    console.error("Erreur getAllSpecialites :", error);
    res.status(500).json({ success: false, message: "Erreur serveur." });
  }
};

module.exports = { getAllCategories, getAllSpecialites };
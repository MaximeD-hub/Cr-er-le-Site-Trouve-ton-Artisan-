const { Op } = require("sequelize");
const Artisan = require("../models/Artisan");
const Specialite = require("../models/Specialite");
const Categorie = require("../models/Categorie");

const INCLUDE = [
  {
    model: Specialite,
    as: "specialite",
    attributes: ["id", "nom"],
    include: [
      {
        model: Categorie,
        as: "categorie",
        attributes: ["id", "nom"],
      },
    ],
  },
];

// GET /api/artisans
const getAllArtisans = async (req, res) => {
  try {
    const { search, categorieId, top } = req.query;
    const where = {};
    const includeWithFilter = [
      {
        model: Specialite,
        as: "specialite",
        attributes: ["id", "nom"],
        // Si categorieId, on filtre sur la spécialité
        where: categorieId ? { categorieId } : undefined,
        required: categorieId ? true : false,
        include: [
          {
            model: Categorie,
            as: "categorie",
            attributes: ["id", "nom"],
          },
        ],
      },
    ];

    if (search) {
      where[Op.or] = [
        { nom: { [Op.like]: `%${search}%` } },
        { ville: { [Op.like]: `%${search}%` } },
      ];
    }

    if (top === "true") where.top = true;

    const artisans = await Artisan.findAll({
      where,
      include: includeWithFilter,
      order: [["top", "DESC"], ["note", "DESC"], ["nom", "ASC"]],
    });

    res.json({ success: true, count: artisans.length, data: artisans });
  } catch (error) {
    console.error("Erreur getAllArtisans :", error);
    res.status(500).json({ success: false, message: "Erreur serveur." });
  }
};

// GET /api/artisans/top
const getTopArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      where: { top: true },
      include: INCLUDE,
      order: [["note", "DESC"]],
    });

    res.json({ success: true, count: artisans.length, data: artisans });
  } catch (error) {
    console.error("Erreur getTopArtisans :", error);
    res.status(500).json({ success: false, message: "Erreur serveur." });
  }
};

// GET /api/artisans/:id
const getArtisanById = async (req, res) => {
  try {
    const { id } = req.params;
    const artisan = await Artisan.findByPk(id, { include: INCLUDE });

    if (!artisan) {
      return res.status(404).json({
        success: false,
        message: `Artisan ${id} introuvable.`,
      });
    }

    res.json({ success: true, data: artisan });
  } catch (error) {
    console.error("Erreur getArtisanById :", error);
    res.status(500).json({ success: false, message: "Erreur serveur." });
  }
};

module.exports = { getAllArtisans, getTopArtisans, getArtisanById };
// Routes des artisans

const express = require("express");
const router = express.Router();
const { getAllArtisans, getTopArtisans, getArtisanById } = require("../controllers/artisanController.");

router.get("/top", getTopArtisans);   // Avant /:id !
router.get("/", getAllArtisans);
router.get("/:id", getArtisanById);

module.exports = router;
// Routes des spécialités

const express = require("express");
const router = express.Router();
const { getAllSpecialites } = require("../controllers/categorieController");

router.get("/", getAllSpecialites);

module.exports = router;
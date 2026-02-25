// Point d'entrée du serveur Express

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { testConnection } = require("./config/database");
const { apiKeyAuth } = require("./middleware/auth");

const artisansRoutes = require("./routes/artisans");
const categoriesRoutes = require("./routes/categories");
const specialitesRoutes = require("./routes/specialites");
const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5000;

// --- Middlewares globaux ---
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());

// --- Route de santé ---
app.get("/health", (req, res) => {
  res.json({ success: true, message: "API opérationnelle 🚀" });
});

// --- Authentification API ---
app.use("/api", apiKeyAuth);

// --- Routes ---
app.use("/api/artisans", artisansRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/specialites", specialitesRoutes);
app.use("/api/contact", contactRoutes);

// --- Route 404 ---
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route introuvable." });
});

// --- Gestionnaire d'erreurs ---
app.use((err, req, res, next) => {
  console.error("💥 Erreur :", err);
  res.status(500).json({ success: false, message: "Erreur interne." });
});

// --- Démarrage ---
const start = async () => {
  await testConnection();
  app.listen(PORT, () => {
    console.log(`\n🚀 Serveur démarré sur http://localhost:${PORT}`);
    console.log(`   GET  /health`);
    console.log(`   GET  /api/artisans`);
    console.log(`   GET  /api/artisans/top`);
    console.log(`   GET  /api/artisans/:id`);
    console.log(`   GET  /api/categories`);
    console.log(`   GET  /api/specialites`);
    console.log(`   POST /api/contact\n`);
  });
};

start();
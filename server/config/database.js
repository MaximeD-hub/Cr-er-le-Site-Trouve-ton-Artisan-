// Configuration de la connexion MySQL via Sequelize

const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false,
  }
);

// Test de la connexion
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connexion MySQL réussie.");
  } catch (error) {
    console.error("❌ Erreur de connexion MySQL :", error.message);
    process.exit(1);
  }
};

module.exports = { sequelize, testConnection };
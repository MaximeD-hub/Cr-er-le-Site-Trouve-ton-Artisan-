// Modèle Sequelize pour la table des spécialités

const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Categorie = require("./Categorie");

const Specialite = sequelize.define(
  "Specialite",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    categorieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "specialites",
  }
);

// Associations
Specialite.belongsTo(Categorie, { foreignKey: "categorieId", as: "categorie" });
Categorie.hasMany(Specialite, { foreignKey: "categorieId", as: "specialites" });

module.exports = Specialite;
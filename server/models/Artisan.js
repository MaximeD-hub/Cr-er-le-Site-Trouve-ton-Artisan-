// Modèle Sequelize pour la table des artisans

const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Specialite = require("./Specialite");

const Artisan = sequelize.define(
  "Artisan",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    note: {
      type: DataTypes.DECIMAL(2, 1),
      allowNull: true,
    },
    ville: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apropos: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    siteWeb: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    top: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    specialiteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "artisans",
  }
);

// Associations
Artisan.belongsTo(Specialite, { foreignKey: "specialiteId", as: "specialite" });
Specialite.hasMany(Artisan, { foreignKey: "specialiteId", as: "artisans" });

module.exports = Artisan;
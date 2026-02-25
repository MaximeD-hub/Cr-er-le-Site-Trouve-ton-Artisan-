-- =============================================
-- Création de la base de données
-- Trouve ton Artisan - Auvergne-Rhône-Alpes
-- =============================================

CREATE DATABASE IF NOT EXISTS trouve_ton_artisan
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE trouve_ton_artisan;

-- Table des catégories
CREATE TABLE IF NOT EXISTS categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL UNIQUE,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table des spécialités
CREATE TABLE IF NOT EXISTS specialites (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL UNIQUE,
  categorieId INT NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_specialite_categorie
    FOREIGN KEY (categorieId) REFERENCES categories(id)
    ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Table des artisans
CREATE TABLE IF NOT EXISTS artisans (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(150) NOT NULL,
  note DECIMAL(2,1) DEFAULT NULL,
  ville VARCHAR(100) NOT NULL,
  apropos TEXT,
  email VARCHAR(200) NOT NULL,
  siteWeb VARCHAR(255) DEFAULT NULL,
  top TINYINT(1) NOT NULL DEFAULT 0,
  specialiteId INT NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_artisan_specialite
    FOREIGN KEY (specialiteId) REFERENCES specialites(id)
    ON DELETE RESTRICT ON UPDATE CASCADE
);
# Trouve ton Artisan 🔨

Plateforme web de mise en relation avec les artisans de la région Auvergne-Rhône-Alpes.

## Technologies utilisées

**Front-end**
- React.js 19 + Vite
- React Router DOM
- Bootstrap 5 + Sass
- Axios
- React Icons

**Back-end**
- Node.js + Express
- Sequelize ORM
- MySQL
- Express Validator

## Prérequis

- Node.js v18+
- MySQL (XAMPP recommandé)

## Installation

### 1. Cloner le projet
```bash
git clone https://github.com/MaximeD-hub/Cr-er-le-Site-Trouve-ton-Artisan-.git
cd "Créer le Site trouve ton artisan"
```

### 2. Installer le front-end
```bash
cd client
npm install
```

### 3. Installer le back-end
```bash
cd server
npm install
```

### 4. Configurer la base de données
- Démarrer XAMPP (Apache + MySQL)
- Créer la base de données dans phpMyAdmin :
```sql
CREATE DATABASE trouve_ton_artisan
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
```
- Copier le fichier `.env.example` en `.env` et remplir les informations :
```
PORT=5000
DB_HOST=localhost
DB_PORT=3306
DB_NAME=trouve_ton_artisan
DB_USER=root
DB_PASSWORD=
API_KEY=trouve_ton_artisan_api_key
CORS_ORIGIN=http://localhost:5173
```

### 5. Peupler la base de données
```bash
cd server
node config/seedDatabase.js
```

### 6. Lancer le projet

Dans un terminal, démarrer le back-end :
```bash
cd server
npm run dev
```

Dans un second terminal, démarrer le front-end :
```bash
cd client
npm run dev
```

Ouvrir **http://localhost:5173** dans le navigateur.

## Structure du projet
```
créer le site trouve ton artisan/
├── client/                   # Front-end React
│   ├── src/
│   │   ├── assets/           # Images et polices
│   │   ├── components/       # Composants réutilisables
│   │   │   ├── ArtisanCard/
│   │   │   ├── Footer/
│   │   │   ├── Navbar/
│   │   │   └── StarRating/
│   │   ├── data/             # Données statiques
│   │   ├── pages/            # Pages de l'application
│   │   │   ├── ArtisanDetail/
│   │   │   ├── Artisans/
│   │   │   └── Home/
│   │   ├── services/         # Appels API (Axios)
│   │   └── styles/           # Variables et styles globaux
│   └── index.html
└── server/                   # Back-end Express
    ├── config/               # Configuration BDD + seed
    ├── controllers/          # Logique métier
    ├── middleware/            # Authentification API
    ├── models/               # Modèles Sequelize
    ├── routes/               # Endpoints API
    └── sql/                  # Scripts SQL
        ├──── create.sql
        └──── seed.sql
```

## API Endpoints

| Méthode | Route              | Description            |
|---------|--------------------|------------------------|
| GET     | /health            | Santé du serveur       |
| GET     | /api/artisans      | Liste des artisans     |
| GET     | /api/artisans/top  | Top artisans           |
| GET     | /api/artisans/:id  | Détail d'un artisan    |
| GET     | /api/categories    | Liste des catégories   |
| GET     | /api/specialites   | Liste des spécialités  |
| POST    | /api/contact       | Envoyer un message     |

> Toutes les routes `/api/*` nécessitent le header `x-api-key`.

## Base de données

3 tables :
- **categories** : Alimentation, Bâtiment, Fabrication, Services
- **specialites** : 15 spécialités rattachées à une catégorie
- **artisans** : 17 artisans rattachés à une spécialité

## Auteur

Projet réalisé dans le cadre du titre professionnel **Développeur Web et Web Mobile** du CEF.  
Maxime Dubois.
// Script de peuplement de la base de données
// Exécuter avec : node config/seedDatabase.js

require("dotenv").config();
const { sequelize } = require("./database");
const Categorie = require("../models/Categorie");
const Specialite = require("../models/Specialite");
const Artisan = require("../models/Artisan");

const seed = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("🗄️  Tables créées.");

    // Catégories
    const categories = await Categorie.bulkCreate([
      { nom: "Alimentation" },
      { nom: "Bâtiment" },
      { nom: "Fabrication" },
      { nom: "Services" },
    ]);
    console.log("✅ Catégories insérées.");

    // Map nom → id
    const catMap = {};
    categories.forEach((c) => { catMap[c.nom] = c.id; });

    // Spécialités
    const specialites = await Specialite.bulkCreate([
      { nom: "Boucher",      categorieId: catMap["Alimentation"] },
      { nom: "Boulanger",    categorieId: catMap["Alimentation"] },
      { nom: "Chocolatier",  categorieId: catMap["Alimentation"] },
      { nom: "Traiteur",     categorieId: catMap["Alimentation"] },
      { nom: "Chauffagiste", categorieId: catMap["Bâtiment"] },
      { nom: "Electricien",  categorieId: catMap["Bâtiment"] },
      { nom: "Menuisier",    categorieId: catMap["Bâtiment"] },
      { nom: "Plombier",     categorieId: catMap["Bâtiment"] },
      { nom: "Bijoutier",    categorieId: catMap["Fabrication"] },
      { nom: "Couturier",    categorieId: catMap["Fabrication"] },
      { nom: "Ferronnier",   categorieId: catMap["Fabrication"] },
      { nom: "Coiffeur",     categorieId: catMap["Services"] },
      { nom: "Fleuriste",    categorieId: catMap["Services"] },
      { nom: "Toiletteur",   categorieId: catMap["Services"] },
      { nom: "Webdesign",    categorieId: catMap["Services"] },
    ]);
    console.log("✅ Spécialités insérées.");

    // Map nom → id
    const specMap = {};
    specialites.forEach((s) => { specMap[s.nom] = s.id; });

    // Artisans
    await Artisan.bulkCreate([
      { nom: "Boucherie Dumont",     note: 4.5, ville: "Lyon",             email: "boucherie.dumond@gmail.com",             siteWeb: null,                                 top: false, specialiteId: specMap["Boucher"],      apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
      { nom: "Au pain chaud",        note: 4.8, ville: "Montélimar",        email: "aupainchaud@hotmail.com",                siteWeb: null,                                 top: true,  specialiteId: specMap["Boulanger"],    apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
      { nom: "Chocolaterie Labbé",   note: 4.9, ville: "Lyon",             email: "chocolaterie-labbe@gmail.com",           siteWeb: "https://chocolaterie-labbe.fr",      top: true,  specialiteId: specMap["Chocolatier"],  apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
      { nom: "Traiteur Truchon",     note: 4.1, ville: "Lyon",             email: "contact@truchon-traiteur.fr",            siteWeb: "https://truchon-traiteur.fr",        top: false, specialiteId: specMap["Traiteur"],     apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
      { nom: "Orville Salmons",      note: 5.0, ville: "Evian",            email: "o-salmons@live.com",                     siteWeb: null,                                 top: true,  specialiteId: specMap["Chauffagiste"], apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
      { nom: "Mont Blanc Electricité",note: 4.5, ville: "Chamonix",        email: "contact@mont-blanc-electricite.com",     siteWeb: "https://mont-blanc-electricite.com", top: false, specialiteId: specMap["Electricien"],  apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
      { nom: "Boutot & fils",        note: 4.7, ville: "Bourg-en-Bresse",  email: "boutot-menuiserie@gmail.com",            siteWeb: "https://boutot-menuiserie.com",      top: false, specialiteId: specMap["Menuisier"],    apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
      { nom: "Vallis Bellemare",     note: 4.0, ville: "Vienne",           email: "v.bellemare@gmail.com",                  siteWeb: "https://plomberie-bellemare.com",    top: false, specialiteId: specMap["Plombier"],     apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
      { nom: "Claude Quinn",         note: 4.2, ville: "Aix-les-Bains",    email: "claude.quinn@gmail.com",                 siteWeb: null,                                 top: false, specialiteId: specMap["Bijoutier"],    apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
      { nom: "Amitee Lécuyer",       note: 4.5, ville: "Annecy",           email: "a.amitee@hotmail.com",                   siteWeb: "https://lecuyer-couture.com",        top: false, specialiteId: specMap["Couturier"],    apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
      { nom: "Ernest Carignan",      note: 5.0, ville: "Le Puy-en-Velay",  email: "e-carigan@hotmail.com",                  siteWeb: null,                                 top: false, specialiteId: specMap["Ferronnier"],   apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
      { nom: "Royden Charbonneau",   note: 3.8, ville: "Saint-Priest",     email: "r.charbonneau@gmail.com",                siteWeb: null,                                 top: false, specialiteId: specMap["Coiffeur"],     apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
      { nom: "Leala Dennis",         note: 3.8, ville: "Chambéry",         email: "l.dennos@hotmail.fr",                    siteWeb: "https://coiffure-leala-chambery.fr", top: false, specialiteId: specMap["Coiffeur"],     apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
      { nom: "C'est sup'hair",       note: 4.1, ville: "Romans-sur-Isère", email: "sup-hair@gmail.com",                     siteWeb: "https://sup-hair.fr",                top: false, specialiteId: specMap["Coiffeur"],     apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
      { nom: "Le monde des fleurs",  note: 4.6, ville: "Annonay",          email: "contact@le-monde-des-fleurs-annonay.fr", siteWeb: "https://le-monde-des-fleurs-annonay.fr", top: false, specialiteId: specMap["Fleuriste"],    apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
      { nom: "Valérie Laderoute",    note: 4.5, ville: "Valence",          email: "v-laredoute@gmail.com",                  siteWeb: null,                                 top: false, specialiteId: specMap["Toiletteur"],   apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
      { nom: "CM Graphisme",         note: 4.4, ville: "Valence",          email: "contact@cm-graphisme.com",               siteWeb: "https://cm-graphisme.com",           top: false, specialiteId: specMap["Webdesign"],    apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
    ]);
    console.log("✅ Artisans insérés.");

    console.log("\n🎉 Base de données peuplée avec succès !");
    process.exit(0);
  } catch (error) {
    console.error("❌ Erreur :", error);
    process.exit(1);
  }
};

seed();
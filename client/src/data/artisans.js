// Les 4 catégories
export const categories = [
  { id: 1, nom: "Alimentation" },
  { id: 2, nom: "Bâtiment" },
  { id: 3, nom: "Fabrication" },
  { id: 4, nom: "Services" },
];

// Les spécialités rattachées à chaque catégorie
export const specialites = [
  { id: 1, nom: "Boucher",      categorieId: 1 },
  { id: 2, nom: "Boulanger",    categorieId: 1 },
  { id: 3, nom: "Chocolatier",  categorieId: 1 },
  { id: 4, nom: "Traiteur",     categorieId: 1 },
  { id: 5, nom: "Chauffagiste", categorieId: 2 },
  { id: 6, nom: "Electricien",  categorieId: 2 },
  { id: 7, nom: "Menuisier",    categorieId: 2 },
  { id: 8, nom: "Plombier",     categorieId: 2 },
  { id: 9, nom: "Bijoutier",    categorieId: 3 },
  { id: 10, nom: "Couturier",   categorieId: 3 },
  { id: 11, nom: "Ferronnier",  categorieId: 3 },
  { id: 12, nom: "Coiffeur",    categorieId: 4 },
  { id: 13, nom: "Fleuriste",   categorieId: 4 },
  { id: 14, nom: "Toiletteur",  categorieId: 4 },
  { id: 15, nom: "Webdesign",   categorieId: 4 },
];

// Les 17 artisans
export const artisans = [
  { id: 1,  nom: "Boucherie Dumont",    specialite: "Boucher",      categorie: "Alimentation", note: 4.5, ville: "Lyon",              email: "boucherie.dumond@gmail.com",              siteWeb: null,                                 top: false, apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
  { id: 2,  nom: "Au pain chaud",       specialite: "Boulanger",    categorie: "Alimentation", note: 4.8, ville: "Montélimar",         email: "aupainchaud@hotmail.com",                 siteWeb: null,                                 top: true,  apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
  { id: 3,  nom: "Chocolaterie Labbé",  specialite: "Chocolatier",  categorie: "Alimentation", note: 4.9, ville: "Lyon",              email: "chocolaterie-labbe@gmail.com",            siteWeb: "https://chocolaterie-labbe.fr",      top: true,  apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
  { id: 4,  nom: "Traiteur Truchon",    specialite: "Traiteur",     categorie: "Alimentation", note: 4.1, ville: "Lyon",              email: "contact@truchon-traiteur.fr",             siteWeb: "https://truchon-traiteur.fr",        top: false, apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
  { id: 5,  nom: "Orville Salmons",     specialite: "Chauffagiste", categorie: "Bâtiment",     note: 5.0, ville: "Evian",             email: "o-salmons@live.com",                      siteWeb: null,                                 top: true,  apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
  { id: 6,  nom: "Mont Blanc Electricité", specialite: "Electricien", categorie: "Bâtiment",   note: 4.5, ville: "Chamonix",          email: "contact@mont-blanc-electricite.com",      siteWeb: "https://mont-blanc-electricite.com", top: false, apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
  { id: 7,  nom: "Boutot & fils",       specialite: "Menuisier",    categorie: "Bâtiment",     note: 4.7, ville: "Bourg-en-Bresse",   email: "boutot-menuiserie@gmail.com",             siteWeb: "https://boutot-menuiserie.com",      top: false, apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
  { id: 8,  nom: "Vallis Bellemare",    specialite: "Plombier",     categorie: "Bâtiment",     note: 4.0, ville: "Vienne",            email: "v.bellemare@gmail.com",                   siteWeb: "https://plomberie-bellemare.com",    top: false, apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
  { id: 9,  nom: "Claude Quinn",        specialite: "Bijoutier",    categorie: "Fabrication",  note: 4.2, ville: "Aix-les-Bains",     email: "claude.quinn@gmail.com",                  siteWeb: null,                                 top: false, apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
  { id: 10, nom: "Amitee Lécuyer",      specialite: "Couturier",    categorie: "Fabrication",  note: 4.5, ville: "Annecy",            email: "a.amitee@hotmail.com",                    siteWeb: "https://lecuyer-couture.com",        top: false, apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
  { id: 11, nom: "Ernest Carignan",     specialite: "Ferronnier",   categorie: "Fabrication",  note: 5.0, ville: "Le Puy-en-Velay",   email: "e-carigan@hotmail.com",                   siteWeb: null,                                 top: false, apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
  { id: 12, nom: "Royden Charbonneau",  specialite: "Coiffeur",     categorie: "Services",     note: 3.8, ville: "Saint-Priest",      email: "r.charbonneau@gmail.com",                 siteWeb: null,                                 top: false, apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
  { id: 13, nom: "Leala Dennis",        specialite: "Coiffeur",     categorie: "Services",     note: 3.8, ville: "Chambéry",          email: "l.dennos@hotmail.fr",                     siteWeb: "https://coiffure-leala-chambery.fr", top: false, apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
  { id: 14, nom: "C'est sup'hair",      specialite: "Coiffeur",     categorie: "Services",     note: 4.1, ville: "Romans-sur-Isère",  email: "sup-hair@gmail.com",                      siteWeb: "https://sup-hair.fr",                top: false, apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
  { id: 15, nom: "Le monde des fleurs", specialite: "Fleuriste",    categorie: "Services",     note: 4.6, ville: "Annonay",           email: "contact@le-monde-des-fleurs-annonay.fr",  siteWeb: "https://le-monde-des-fleurs-annonay.fr", top: false, apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
  { id: 16, nom: "Valérie Laderoute",   specialite: "Toiletteur",   categorie: "Services",     note: 4.5, ville: "Valence",           email: "v-laredoute@gmail.com",                   siteWeb: null,                                 top: false, apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
  { id: 17, nom: "CM Graphisme",        specialite: "Webdesign",    categorie: "Services",     note: 4.4, ville: "Valence",           email: "contact@cm-graphisme.com",                siteWeb: "https://cm-graphisme.com",           top: false, apropos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin." },
];
/* ============================================================
   CATALOGUE DU PETIT HORTICULTEUR
   ------------------------------------------------------------
   Données réelles : comptage de stock de novembre 2026.
   Pour modifier : changez simplement les lignes ci-dessous.
   Chaque plante est un bloc entre accolades :
     { emoji: "🌼", nom: "...", prix: 2.50, categorie: "vivaces",
       description: "...", dispo: true },
   - prix      : en euros (0 = prix en boutique)
   - categorie : "vivaces", "arbustes", "fruits" ou "potager"
   - dispo     : true = disponible, false = rupture de stock
   ============================================================ */

const INFO_BOUTIQUE = {
  telephone: "+33681795581",
  telephoneAffiche: "06 81 79 55 81",
  email: "lepetithorticulteur@outlook.com",
  adresse: "22 B Route de Beaune, 21190 Labergement-lès-Seurre, Bourgogne",
  annonce: "🌿 La pépinière est actuellement fermée — réouverture au printemps !",
  horaires: {
    "Lundi":    { texte: "Fermé", ferme: true },
    "Mardi":    { texte: "Fermé", ferme: true },
    "Mercredi": { texte: "Fermé", ferme: true },
    "Jeudi":    { texte: "Fermé", ferme: true },
    "Vendredi": { texte: "Fermé", ferme: true },
    "Samedi":   { texte: "Fermé", ferme: true },
    "Dimanche": { texte: "Fermé", ferme: true },
  },
};

const PLANTES = [

  /* ---------- VIVACES & FLEURS ---------- */

  { emoji: "🌼", nom: "Achillée millefeuille", prix: 2.50, categorie: "vivaces", description: "Vivace rustique, pot de 1 litre", dispo: true },
  { emoji: "💜", nom: "Aubriète ‘Superbissima’", prix: 2.50, categorie: "vivaces", description: "Vivace tapissante, pot de 1 litre", dispo: true },
  { emoji: "🌸", nom: "Œillet ‘Sweetness’", prix: 2.50, categorie: "vivaces", description: "Vivace parfumée, pot de 1 litre", dispo: true },
  { emoji: "💙", nom: "Sauge sclarée", prix: 2.50, categorie: "vivaces", description: "Vivace, pot de 1 litre", dispo: true },
  { emoji: "🌿", nom: "Sauge argentée", prix: 2.50, categorie: "vivaces", description: "Vivace, pot de 1 litre", dispo: true },
  { emoji: "🍁", nom: "Heuchère ‘Marvelous’", prix: 2.50, categorie: "vivaces", description: "Vivace au feuillage coloré, pot de 1 litre", dispo: true },
  { emoji: "🪻", nom: "Pulsatille", prix: 2.50, categorie: "vivaces", description: "Vivace de printemps, pot de 1 litre", dispo: true },
  { emoji: "🌺", nom: "Échinacée pourpre", prix: 2.50, categorie: "vivaces", description: "Vivace, pot de 1 litre", dispo: true },
  { emoji: "🌻", nom: "Rudbeckie laciniée", prix: 2.50, categorie: "vivaces", description: "Vivace à fleurs jaunes, pot de 1 litre", dispo: true },
  { emoji: "☀️", nom: "Coreopsis ‘Presto’", prix: 2.50, categorie: "vivaces", description: "Vivace, pot de 1 litre", dispo: true },
  { emoji: "🌾", nom: "Carex panaché", prix: 2.50, categorie: "vivaces", description: "Graminée, pot de 1 litre", dispo: true },
  { emoji: "💚", nom: "Orpin de Selskii", prix: 2.50, categorie: "vivaces", description: "Vivace succulente, pot de 1 litre", dispo: true },
  { emoji: "🍃", nom: "Orpin bâtard", prix: 2.50, categorie: "vivaces", description: "Vivace succulente, pot de 1 litre", dispo: true },
  { emoji: "💟", nom: "Pourpier vivace violet (Delosperma)", prix: 2.50, categorie: "vivaces", description: "Vivace succulente, pot de 1 litre", dispo: true },
  { emoji: "🪴", nom: "Joubarbe", prix: 2.50, categorie: "vivaces", description: "Vivace succulente, pot de 1 litre", dispo: true },
  { emoji: "🌵", nom: "Plantes grasses (3 variétés)", prix: 2.50, categorie: "vivaces", description: "Pot de 1 litre", dispo: true },
  { emoji: "🦋", nom: "Gaura ‘Sparkle’", prix: 2.50, categorie: "vivaces", description: "Vivace à floraison longue, pot de 1 litre", dispo: true },
  { emoji: "🌼", nom: "Pyrèthre", prix: 2.50, categorie: "vivaces", description: "Vivace à fleurs de marguerite, pot de 1 litre", dispo: true },
  { emoji: "🔔", nom: "Campanule", prix: 2.50, categorie: "vivaces", description: "Vivace, pot de 1 litre", dispo: true },
  { emoji: "🌸", nom: "Bergénie", prix: 2.50, categorie: "vivaces", description: "Vivace robuste, pot de 1 litre", dispo: true },
  { emoji: "🔵", nom: "Échinops boule", prix: 2.50, categorie: "vivaces", description: "Vivace à fleurs bleues en boule, pot de 1 litre", dispo: true },
  { emoji: "🐉", nom: "Muflier", prix: 2.50, categorie: "vivaces", description: "Plante à fleurs colorées, pot de 1 litre", dispo: true },
  { emoji: "🔴", nom: "Hémérocalle ‘Everydaylily Red Ribs’", prix: 15.00, categorie: "vivaces", description: "Pot de 3 litres", dispo: true },
  { emoji: "💗", nom: "Lewisia en pot rond", prix: 3.00, categorie: "vivaces", description: "Pot rond", dispo: true },
  { emoji: "🥣", nom: "Lewisia en coupe plantée", prix: 12.00, categorie: "vivaces", description: "Coupe plantée, prête à offrir", dispo: true },
  { emoji: "🍂", nom: "Sédum grand format", prix: 5.00, categorie: "vivaces", description: "Grand format", dispo: true },
  { emoji: "☀️", nom: "Coreopsis grandiflora", prix: 5.00, categorie: "vivaces", description: "Pot de 2 litres", dispo: true },
  { emoji: "🌵", nom: "Opuntia (figuier de Barbarie)", prix: 12.00, categorie: "vivaces", description: "Cactus rustique, pot de 3 litres", dispo: true },
  { emoji: "🔮", nom: "Agapanthe ‘Blue Infinity’", prix: 15.00, categorie: "vivaces", description: "Fleurs bleues en bouquet", dispo: true },
  { emoji: "🌸", nom: "Chrysanthème", prix: 6.00, categorie: "vivaces", description: "En pot : 6 € — en coupe ou pour le jardin : 9 €", dispo: true },
  { emoji: "🌺", nom: "Bégonia Dragon Wing", prix: 2.50, categorie: "vivaces", description: "Plante de terrasse, à protéger du gel", dispo: true },
  { emoji: "❄️", nom: "Chou décoratif", prix: 2.50, categorie: "vivaces", description: "Pour décorer jardinières et massifs d'hiver", dispo: true },
  { emoji: "🌸", nom: "Œillet grandiflora", prix: 2.50, categorie: "vivaces", description: "Grandes fleurs coupées", dispo: true },
  { emoji: "☀️", nom: "Hélichryse (immortelle d'Italie)", prix: 2.50, categorie: "vivaces", description: "Fleurs qui gardent leur couleur", dispo: true },
  { emoji: "🌈", nom: "Gazanias et Ostéospermums", prix: 3.00, categorie: "vivaces", description: "Marguerites du soleil", dispo: true },
  { emoji: "🌼", nom: "Pensées et pâquerettes", prix: 0.80, categorie: "vivaces", description: "À l'unité", dispo: true },
  { emoji: "🌾", nom: "Graminées", prix: 1.50, categorie: "vivaces", description: "Godet de 9 cm", dispo: true },
  { emoji: "🪺", nom: "Sarracénie (plante carnivore)", prix: 10.00, categorie: "vivaces", description: "Plante carnivore d'ornement", dispo: true },

  /* ---------- ARBUSTES & GRIMPANTES ---------- */

  { emoji: "🌸", nom: "Cistes (purpureus et decumbens)", prix: 15.00, categorie: "arbustes", description: "Arbuste méditerranéen", dispo: true },
  { emoji: "🌴", nom: "Yucca filamenteux", prix: 15.00, categorie: "arbustes", description: "Arbuste au feuillage rigide", dispo: true },
  { emoji: "🌾", nom: "Saule ‘Crawett’", prix: 15.00, categorie: "arbustes", description: "Arbuste", dispo: true },
  { emoji: "🍃", nom: "Laurier sauce", prix: 15.00, categorie: ["arbustes", "aromates"], description: "Arbuste aromatique", dispo: true },
  { emoji: "🌺", nom: "Cognassier du Japon", prix: 15.00, categorie: "arbustes", description: "Arbuste à fleurs du printemps", dispo: true },
  { emoji: "🌿", nom: "Sauge officinale", prix: 15.00, categorie: ["arbustes", "aromates"], description: "Arbuste aromatique", dispo: true },
  { emoji: "🔥", nom: "Cornouiller ‘Midwinter Fire’", prix: 15.00, categorie: "arbustes", description: "Écorce visible en hiver", dispo: true },
  { emoji: "💙", nom: "Caryoptéris ‘Blue Fountain’", prix: 15.00, categorie: "arbustes", description: "Floraison bleue de fin d'été", dispo: true },
  { emoji: "🌺", nom: "Hibiscus des marais", prix: 15.00, categorie: "arbustes", description: "Grandes fleurs d'été", dispo: true },
  { emoji: "🌸", nom: "Hortensia ‘Sundae Fraise’", prix: 15.00, categorie: "arbustes", description: "Floraison rose blanche", dispo: true },
  { emoji: "🌸", nom: "Abélia ‘Hopley’s’", prix: 15.00, categorie: "arbustes", description: "Arbuste à floraison longue", dispo: true },
  { emoji: "🌸", nom: "Abélia grandiflora panaché", prix: 15.00, categorie: "arbustes", description: "Feuillage panaché", dispo: true },
  { emoji: "🍇", nom: "Callicarpe ‘Profusion’", prix: 15.00, categorie: "arbustes", description: "Baies violettes en automne", dispo: true },
  { emoji: "🪻", nom: "Lilas ‘Flowerfesta Purple’", prix: 15.00, categorie: "arbustes", description: "Lilas compact et parfumé", dispo: true },
  { emoji: "🌿", nom: "Sauge arbustive ‘Shell Dancer’", prix: 15.00, categorie: "arbustes", description: "Floraison rose de l'été à l'automne", dispo: true },
  { emoji: "🌸", nom: "Spirée du Japon", prix: 15.00, categorie: "arbustes", description: "Arbuste facile", dispo: true },
  { emoji: "🌾", nom: "Perovskia (sauge d'Afghanistan)", prix: 15.00, categorie: "arbustes", description: "Floraison bleu lavande", dispo: true },
  { emoji: "🌸", nom: "Deutzia ‘Perle Rose’", prix: 15.00, categorie: "arbustes", description: "Floraison printanière", dispo: true },
  { emoji: "🌸", nom: "Deutzia magnifica", prix: 15.00, categorie: "arbustes", description: "Floraison printanière abondante", dispo: true },
  { emoji: "🚿", nom: "Clématite ‘Madame Le Coultre’", prix: 15.00, categorie: "arbustes", description: "Grimpante à grandes fleurs blanches", dispo: true },
  { emoji: "🍷", nom: "Clématite ‘Niobe’", prix: 15.00, categorie: "arbustes", description: "Grimpante à fleurs rouge pourpre", dispo: true },
  { emoji: "🌿", nom: "Choisya ‘Greenfingers’", prix: 15.00, categorie: "arbustes", description: "Oranger du Mexique", dispo: true },
  { emoji: "🌸", nom: "Choisya ‘White Dazzler’", prix: 15.00, categorie: "arbustes", description: "Oranger du Mexique, parfumé", dispo: true },
  { emoji: "❄️", nom: "Boule de neige (viorne)", prix: 15.00, categorie: "arbustes", description: "Disponible au printemps 2027", dispo: false },
  { emoji: "🎋", nom: "Bambou non traçant ‘Formidable’", prix: 22.00, categorie: "arbustes", description: "Bambou en touffe, non envahissant", dispo: true },
  { emoji: "🍁", nom: "Érable du Japon ‘Red Wood’", prix: 22.00, categorie: "arbustes", description: "Érable du Japon", dispo: true },
  { emoji: "🍁", nom: "Érable du Japon ‘Summer Gold’", prix: 22.00, categorie: "arbustes", description: "Érable du Japon au feuillage doré", dispo: true },
  { emoji: "🍁", nom: "Érable du Japon ‘Arakawa’", prix: 22.00, categorie: "arbustes", description: "Érable du Japon à écorce liégeuse", dispo: true },
  { emoji: "🍁", nom: "Érable du Japon ‘Trompenburg’", prix: 22.00, categorie: "arbustes", description: "Érable du Japon au feuillage pourpre découpé", dispo: true },
  { emoji: "🍁", nom: "Érable du Japon ‘Deshojo’", prix: 22.00, categorie: "arbustes", description: "Érable du Japon, jeunes pousses rouges", dispo: true },
  { emoji: "🌼", nom: "Chèvrefeuille (Lonicera)", prix: 12.00, categorie: "arbustes", description: "Grimpante parfumée", dispo: true },

  /* ---------- PETITS FRUITS ---------- */

  { emoji: "🍓", nom: "Framboisier ‘Heritage’ rouge remontant", prix: 5.00, categorie: "fruits", description: "Framboises de l'été à l'automne", dispo: true },
  { emoji: "🖤", nom: "Cassis ‘Andega’", prix: 5.00, categorie: "fruits", description: "Cassissier à gros fruits", dispo: true },
  { emoji: "🫐", nom: "Mûre sans épines ‘Dirksen’", prix: 5.00, categorie: "fruits", description: "Ronce aux fruits sucrés, sans épines", dispo: true },
  { emoji: "🥝", nom: "Kiwi autofertile ‘Herma’", prix: 10.00, categorie: "fruits", description: "Un seul pied suffit pour fructifier", dispo: true },

  /* ---------- POTAGER & DIVERS ---------- */

  { emoji: "🌿", nom: "Thym", prix: 0, categorie: "aromates", description: "Aromate", dispo: true },

  { emoji: "🪣", nom: "Terreau (sac)", prix: 19.00, categorie: "potager", description: "Sac de terreau — revente", dispo: true },
];

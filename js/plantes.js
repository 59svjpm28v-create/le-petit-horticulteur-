/* ============================================================
   CATALOGUE DU PETIT HORTICULTEUR
   ------------------------------------------------------------
   Pour modifier le catalogue : changez simplement les lignes
   ci-dessous. Chaque plante est un bloc entre accolades :
     { emoji: "🪴", nom: "...", prix: 0, categorie: "...",
       description: "...", dispo: true },
   - prix      : en euros (mettre 0 si non renseigné)
   - categorie : "interieur", "exterieur" ou "legumes"
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
    "Mardi":    { texte: "9h - 18h", ferme: false },
    "Mercredi": { texte: "9h - 18h", ferme: false },
    "Jeudi":    { texte: "9h - 18h", ferme: false },
    "Vendredi": { texte: "9h - 18h", ferme: false },
    "Samedi":   { texte: "9h - 18h", ferme: false },
    "Dimanche": { texte: "Fermé", ferme: true },
  },
};

const PLANTES = [
  /* =================================================
     CATALOGUE VIDE VOLONTAIREMENT :
     aucune plante inventee n'est affichee.
     La vraie liste sera ajoutée quand elle sera fournie.
     ================================================= */
];

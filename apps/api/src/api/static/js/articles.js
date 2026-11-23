/* ============================================================
   CONSEILS DU PETIT HORTICULTEUR
   ------------------------------------------------------------
   Chaque conseil est un bloc entre accolades :
     { date: "2026-11-25", titre: "...", texte: "..." },

   - date  : jour de parution (année-mois-jour).
             Un conseil daté dans le futur n'apparaît pas
             encore : le site l'affiche automatiquement
             le jour venu. Parution chaque mercredi.
   - texte : le contenu de l'article.
   ============================================================ */

const CONSEILS = [
  {
    date: "2026-11-25",
    titre: "Protéger vos plantes du gel : les bons gestes",
    texte: "Le gel arrive : pensez à rentrer ou protéger les plantes fragiles (laurier-rose, agrumes, succulentes en pot). Rentrez-les près d'une fenêtre lumineuse, et surtout : on n'arrose presque plus ! Une plante au frais a soif bien moins souvent. Pour celles qui restent dehors, un voile d'hivernage fait des merveilles.",
  },
  {
    date: "2026-12-02",
    titre: "Plantons les bulbes de printemps avant qu'il gèle",
    texte: "Tulipes, narcisses, jacinthes… il est encore temps de les planter ! Percez un trou de trois fois la hauteur du bulbe, pointe vers le haut, et laissez la nature faire son œuvre. Dès les premiers beaux jours, votre jardin sera le premier en fleurs. Petit secret : les bulbes se plantent en groupes de 5 ou 6 pour un effet spectaculaire.",
  },
  {
    date: "2026-12-09",
    titre: "En hiver, pensez à votre futur potager",
    texte: "Décembre, c'est le moment idéal pour rêver son potager sur le papier : que voulez-vous planter au printemps ? Tomates ? Courgettes ? Salades ? Notez où chaque légume a poussé cette année, et changez : c'est la rotation des cultures, le secret des jardiniers qui réussissent tout.",
  },
  {
    date: "2026-12-16",
    titre: "Le paillage, meilleure amie de vos plantes",
    texte: "Une couche de paille, de feuilles mortes ou de copeaux au pied de vos plantations : c'est un trésor ! Le paillage protège du gel en hiver, garde l'humidité en été et nourrit la terre en se décomposant. Trois fonctions pour un geste qui prend dix minutes.",
  },
  {
    date: "2026-12-23",
    titre: "Offrir une plante pour Noël : le cadeau qui grandit",
    texte: "Une plante, c'est le cadeau qui dure : elle grandit avec la personne, elle décore, elle parfume. Quelques branches de gui, un joli cache-pot, et votre cadeau de Noël est prêt à faire plaisir. Et pour les idées encore plus originales, la réouverture de la pépinière au printemps vous réservera de belles surprises !",
  },
  {
    date: "2026-12-30",
    titre: "Toute l'équipe vous souhaite une belle année 2027",
    texte: "Une année se termine, une autre commence : 2027 sera l'année des retrouvailles au Petit Horticulteur ! La pépinière rouvrira au printemps avec ses plantes, ses fleurs, ses jeunes plants de légumes… et toujours le conseil en plus, en drive ou sur place. En attendant, prenez soin de vos plantes et de vous.",
  },
  {
    date: "2027-01-06",
    titre: "Vos résolutions jardinage 2027",
    texte: "Envie de bien démarrer l'année ? Trois résolutions faciles : 1) Arroser moins mais mieux — la plupart des plantes meurent d'excès d'eau. 2) Tailler au bon moment — chaque plante a sa saison, on vous le rappellera ici chaque semaine. 3) Salir vos mains — le jardinage, c'est fait pour s'amuser !",
  },
  {
    date: "2027-01-13",
    titre: "Vos plantes d'intérieur ont besoin de lumière",
    texte: "En janvier, le soleil manque : les plantes d'intérieur en souffrent. Rapprochez-les des fenêtres, nettoyez leurs feuilles (la poussière bloque la lumière !) et tournez les pots d'un quart de tour chaque semaine pour qu'elles poussent droites. Elles attendent le printemps avec nous.",
  },
];

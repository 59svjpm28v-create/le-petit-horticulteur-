/* Le Petit Horticulteur — rendu du catalogue et infos boutique */

function euro(prix) {
  return prix > 0 ? prix.toFixed(2).replace(".", ",") + " €" : "Prix en boutique";
}

function cartePlante(p) {
  const dispo = p.dispo
    ? '<span class="dispo ok">Disponible</span>'
    : '<span class="dispo ko">Rupture</span>';
  return '<article class="plante-card">' +
    '<div class="info">' +
      '<h3>' + p.nom + '</h3>' +
      '<p class="desc">' + p.description + '</p>' +
      '<p class="prix">' + euro(p.prix) + '</p>' +
      dispo +
    '</div></article>';
}

function afficherCatalogue(categorie) {
  const grille = document.getElementById("grille-plantes");
  if (!grille) return;
  const cat = categorie || "toutes";
  const liste = PLANTES.filter(function (p) {
    return cat === "toutes" || p.categorie === cat || (Array.isArray(p.categorie) && p.categorie.indexOf(cat) !== -1);
  });
  grille.innerHTML = liste.length
    ? liste.map(cartePlante).join("")
    : '<div class="catalogue-vide">🌱 Le catalogue est en préparation — la pépinière rouvre au printemps !<br>Pour connaître les plantes disponibles ou pré-commander, appelez-nous : c\'est le plus simple. 📞</div>';
}

function initFiltres() {
  const boutons = document.querySelectorAll(".filtre");
  boutons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      boutons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      afficherCatalogue(btn.dataset.categorie);
    });
  });
}

function initInfosBoutique() {
  const liensTel = document.querySelectorAll('a[href="tel:+33000000000"]');
  if (INFO_BOUTIQUE.telephone) {
    liensTel.forEach(function (a) {
      a.href = "tel:" + INFO_BOUTIQUE.telephone;
      a.textContent = "📞 " + INFO_BOUTIQUE.telephoneAffiche;
    });
  }

  const annonces = document.querySelectorAll(".annonce");
  if (INFO_BOUTIQUE.annonce) {
    annonces.forEach(function (el) {
      el.textContent = INFO_BOUTIQUE.annonce;
      el.hidden = false;
    });
  }

  const adresseP = document.getElementById("adresse");
  if (adresseP && INFO_BOUTIQUE.adresse) {
    adresseP.textContent = INFO_BOUTIQUE.adresse;
    const lien = document.getElementById("lien-itineraire");
    lien.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(INFO_BOUTIQUE.adresse);
    lien.hidden = false;
    const carte = document.getElementById("carte");
    if (carte) {
      carte.querySelector("iframe").src =
        "https://www.google.com/maps?q=" + encodeURIComponent(INFO_BOUTIQUE.adresse) + "&output=embed";
      carte.hidden = false;
    }
  }

  const h = INFO_BOUTIQUE.horaires;
  const table = document.getElementById("table-horaires");
  if (table) {
    table.tBodies[0].innerHTML = Object.keys(h).map(function (jour) {
      const j = h[jour];
      return '<tr' + (j.ferme ? ' class="ferme"' : "") + '><th>' + jour +
             '</th><td>' + j.texte + '</td></tr>';
    }).join("");
  }

  const footerH = document.getElementById("footer-horaires");
  if (footerH) {
    const ouverts = Object.keys(h).filter(function (j) { return !h[j].ferme; });
    if (ouverts.length) {
      footerH.textContent = "Ouvert le " + ouverts.join(", ").toLowerCase() + " — heures détaillées sur la page Contact.";
    } else {
      footerH.textContent = "Actuellement fermé — réouverture au printemps !";
    }
  }

  const annee = document.getElementById("annee");
  if (annee) annee.textContent = new Date().getFullYear();
}

function initConseils() {
  const fil = document.getElementById("fil-conseils");
  if (!fil) return;
  const aujourdhui = new Date().toISOString().slice(0, 10);
  const visibles = CONSEILS
    .filter(function (c) { return c.date <= aujourdhui; })
    .sort(function (a, b) { return b.date.localeCompare(a.date); });
  if (!visibles.length) {
    fil.innerHTML = '<p class="lead">Le premier conseil arrive mercredi ! 🌱</p>';
    return;
  }
  fil.innerHTML = visibles.map(function (c) {
    const d = new Date(c.date + "T12:00:00").toLocaleDateString("fr-FR", {
      weekday: "long", day: "numeric", month: "long", year: "numeric",
    });
    return '<article class="conseil-card">' +
      '<time datetime="' + c.date + '">' + d + '</time>' +
      '<h2>' + c.titre + '</h2>' +
      '<p>' + c.texte + '</p>' +
      '</article>';
  }).join("");
}

document.addEventListener("DOMContentLoaded", function () {
  initInfosBoutique();
  initFiltres();
  afficherCatalogue();
  initConseils();

  const sectionExtrait = document.querySelector(".extrait-catalogue");
  const extrait = document.getElementById("extrait-plantes");
  if (extrait) {
    if (PLANTES.length) {
      extrait.innerHTML = PLANTES.slice(0, 3).map(cartePlante).join("");
    } else if (sectionExtrait) {
      sectionExtrait.innerHTML =
        '<h2>Le catalogue arrive au printemps 🌱</h2>' +
        '<p class="lead" style="text-align:center;">La liste de nos plantes est en cours de préparation. En attendant, contactez-nous : nous vous dirons tout ce qui est disponible !</p>' +
        '<div class="center"><a class="btn btn-primary" href="contact.html">📞 Nous contacter</a></div>';
    }
  }
});

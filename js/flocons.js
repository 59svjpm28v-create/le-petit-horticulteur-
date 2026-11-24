/* Le Petit Horticulteur — flocons de neige décoratifs */
(function () {
  var FLOCONS = "\u2744\u2745\u2746";
  var NOMBRE = 22;
  var capa = document.createElement("div");
  capa.className = "flocons";
  capa.setAttribute("aria-hidden", "true");
  for (var i = 0; i < NOMBRE; i++) {
    var flocon = document.createElement("span");
    flocon.className = "flocon";
    flocon.textContent = FLOCONS.charAt(Math.floor(Math.random() * FLOCONS.length));
    flocon.style.left = (Math.random() * 100).toFixed(2) + "%";
    flocon.style.fontSize = (0.55 + Math.random() * 0.75).toFixed(2) + "rem";
    flocon.style.opacity = (0.3 + Math.random() * 0.4).toFixed(2);
    flocon.style.animationDuration = (8 + Math.random() * 10).toFixed(2) + "s";
    flocon.style.animationDelay = (-Math.random() * 18).toFixed(2) + "s";
    capa.appendChild(flocon);
  }
  document.body.appendChild(capa);
})();

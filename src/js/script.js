// *** LIGHTBOX ***
// Étape 1 : Sélectionner le LightBox et gérer sa fermeture
const lb = document.querySelector("#lightbox");

lb.addEventListener("click", function() {
    lb.close(); // Fermer le LightBox
});

const images = document.querySelectorAll("img");


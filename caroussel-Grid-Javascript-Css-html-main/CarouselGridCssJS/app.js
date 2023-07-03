
/* Déclaration des variables */
let allGridItems = [...document.getElementsByClassName("grid-item")];
let popupBg = document.getElementById("popup-bg");
let popupImg = document.getElementById("popup-img");

/* Fonction pour ouvrir le popup */
const openPopup = (e) => {
  let gridItemClicked = e.target.closest(".grid-item");
  let clickedImageName = gridItemClicked.id;
  popupBg.classList.add("active");
  popupImg.src = `./images/${clickedImageName}.jpg`;
};

/* Fonction pour fermer le popup */
const closePopup = () => {
  popupBg.classList.remove("active");
};

/* Ajout des écouteurs d'événements */
// Ajout d'un écouteur de clic à chaque élément de la grille pour ouvrir le popup
allGridItems.forEach((el) => el.addEventListener("click", openPopup));

// Empêche la propagation du clic à l'élément parent pour éviter la fermeture du popup lorsqu'on clique sur l'image
popupImg.addEventListener("click", (e) => e.stopPropagation());

 // Ajout d'un écouteur de clic à l'arrière-plan du popup pour le fermer
popupBg.addEventListener("click", closePopup);
#  Carousse en Grid **avec Html-CSS-Javascript**

## HTML
1.Le HTML crée une page avec une grille d'images et un popup pour afficher les images en plein écran. Il lie également des fichiers CSS et JavaScript pour ajouter des styles et des fonctionnalités supplémentaires.

##CSS
2.Ce code CSS définit les styles pour une grille d'images avec des effets de survol et un popup d'image en plein écran. Il crée une mise en page avec une grille flexible, des dimensions et des transitions pour les éléments de la grille. Le popup est configuré pour apparaître avec un fond sombre et afficher l'image en plein écran, avec un bouton de fermeture. En résumé, ce code ajoute du style à une galerie d'images pour une expérience visuelle améliorée.



##Javascript
3.Ce code JavaScript permet d'ouvrir un popup affichant une image en plein écran lorsque l'utilisateur clique sur un élément de la grille. L'image correspondante est chargée dans le popup. Lorsque l'utilisateur clique en dehors de l'image, le popup se ferme.
```Javascript
let allGridItems = [...document.getElementsByClassName("grid-item")];
let popupBg = document.getElementById("popup-bg");
let popupImg = document.getElementById("popup-img");

const openPopup = (e) => {
  let gridItemClicked = e.target.closest(".grid-item");
  let clickedImageName = gridItemClicked.id;
  popupBg.classList.add("active");
  popupImg.src = `./images/${clickedImageName}.jpg`;
};

const closePopup = () => {
  popupBg.classList.remove("active");
};

allGridItems.forEach((el) => el.addEventListener("click", openPopup));

popupImg.addEventListener("click", (e) => e.stopPropagation());
popupBg.addEventListener("click", closePopup);```


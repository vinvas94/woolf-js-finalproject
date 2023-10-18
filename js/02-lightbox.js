import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");
listEl.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

function createMarkup(element) {
  return element
    .map(
      ({ preview, original, description }) => `

  <li class="gallery__item">
   <a class="gallery-link" href="${original}">
 <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    /></a>
 </li>`
    )
    .join("");
}

// function hadleClick(event) {
//   event.preventDefault();
//   if (event.target === event.currentTarget) {
//     return;
//   }
// }
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

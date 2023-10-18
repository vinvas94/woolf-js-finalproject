import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const listEl = document.querySelector(".gallery");
listEl.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
listEl.addEventListener("click", hadleClick);
function createMarkup(element) {
  return element

    .map(
      ({ preview, original, description }) => `

  <li class="gallery__item">
   <a class="gallery-link" href="${original}">
 <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    /></a>
 </li>`
    )
    .join("");
}

function hadleClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }

  const instance = basicLightbox.create(
    ` <img src="${event.target.dataset.source}"
     alt="${event.target.alt}"/> `,
    {
      onShow: () => {
        document.addEventListener("keydown", closeModal);
      },
      onClose: () => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );

  instance.show();
  function closeModal(ev) {
    if (ev.code !== "Escape") {
      return;
    }
    instance.close();
  }
}

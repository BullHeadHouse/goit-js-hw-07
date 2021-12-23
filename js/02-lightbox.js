import { galleryItems } from "./gallery-items.js";
const gallery_js = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(({ preview, description, original }) => {
    return `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
  })
  .join("");

gallery_js.insertAdjacentHTML("beforeend", galleryMarkup);

let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});

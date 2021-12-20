import { galleryItems } from "./gallery-items.js";
const gallery_js = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

gallery_js.insertAdjacentHTML("beforeend", galleryMarkup);

gallery_js.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  evt.target.src = evt.target.dataset.source;

  const instance = basicLightbox.create(`
      <img src="${evt.target.src}" width="800" height="800">
  `);

  instance.show();
}

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

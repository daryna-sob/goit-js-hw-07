import { galleryItems } from "./gallery-items.js";
const galleryRef = document.querySelector(".gallery");
const renderList = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  })
  .join("");

galleryRef.insertAdjacentHTML("afterbegin", renderList);
let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

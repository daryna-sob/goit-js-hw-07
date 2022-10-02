import { galleryItems } from "./gallery-items.js";
const galleryRef = document.querySelector(".gallery");
const renderList = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
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

galleryRef.insertAdjacentHTML("afterbegin", renderList);

galleryRef.addEventListener("click", selectImageBigSize);

function selectImageBigSize(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const imgLink = e.target.dataset.source;
  console.log(imgLink);
  const instance = basicLightbox.create(`<img src="${imgLink}">`, {
    onShow: onModalShow,
    onClose: onModalClose,
  });
  instance.show();
}

function onModalShow() {
  window.addEventListener("keydown", onEscKeyPress);
}

function onModalClose() {
  window.removeEventListener("keydown", onEscKeyPress);
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = "Escape";
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    instance.close();
  }
}

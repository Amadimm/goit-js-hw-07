import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(`.gallery`);

const newImages = galleryItems.map(
    (image) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`
  )
  .join(" ");

galleryList.insertAdjacentHTML("beforeend", newImages);

galleryList.addEventListener("click", (e) => {
  e.preventDefault();
 
 
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}  ">`
  );
  
  const close = document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
      document.removeEventListener(Object, close);
    }
  });

  instance.show();
});
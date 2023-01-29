import { galleryItems } from './gallery-items.js';

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", getLargeImage);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const markup = galleryItems.forEach(({preview, original, description}) => {
    const markup = `
    <a 
        class="gallery__item" 
        href=${original}>
            <img 
                class="gallery__image" 
                src=${preview} 
                alt=${description}
            />
  </a>`
    gallery.insertAdjacentHTML("beforeend", markup)
})

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


function getLargeImage(event) {
    event.preventDefault();

    if(event.target.nodeName === "IMG") {
        var lightbox = new SimpleLightbox('.gallery a', 
        {     
            captionsData: "alt",
            captionsDelay: "250ms"
        });
    }

}

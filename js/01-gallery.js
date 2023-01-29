import { galleryItems } from './gallery-items.js';

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", getLargeImage);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

galleryItems.forEach(({preview, original, description}) => {
    const markup = `<div class="gallery__item">
    <a class="gallery__link" href=${original}>
    <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}
    />
    </a>
    </div>`
    gallery.insertAdjacentHTML("beforeend", markup)
})

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function getLargeImage(event) {
    event.preventDefault();

    const largeImageLink = event.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
        <img src="${largeImageLink}" width="1200" height="800">
    `)

    if(event.target.nodeName === "IMG") {
        instance.show()
    }

    addEventListener("keydown", event => {
        if(event.code === "Escape") {
            instance.close()
        }
    });
}


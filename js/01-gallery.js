import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemCard(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

galleryRef.addEventListener("click", showLargeImg);


function createGalleryItemCard(galleryItem) {
    return galleryItems.map(({preview, original, description}) => 
    `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>
    `).join("")

    
};

function showLargeImg(event) {
    
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }

    event.preventDefault()

    function onCloseByKeybord(event) {
        if (event.code === "Escape") {
            instance.close()
        }
     }

    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" 
            alt ="${event.target.alt}">
    `,
        {
            onShow: () => { addEventListener("keydown", onCloseByKeybord) },
            onClose: () => {addEventListener("keydown", onCloseByKeybord) }
    })

    instance.show()
}

console.log(galleryItems);
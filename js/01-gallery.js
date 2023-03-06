import { galleryItems } from './gallery-items.js';

function createGalleryItemsMarkup (galleryItems) {
    return galleryItems.map((item) => {
        const {preview, original, description} = item
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}" />
            </a>
        </div>`
        }).join(" ")
}
const galleryContainer = document.querySelector('.gallery')
const gallaryMarkup = createGalleryItemsMarkup(galleryItems)
galleryContainer.insertAdjacentHTML('beforeend', gallaryMarkup)

galleryContainer.addEventListener('click', handlGalleryContainer)

function handlGalleryContainer(event) {
    event.preventDefault()
    const largeImg = event.target.dataset.source
    if (!event.target.classList.contains("gallery__image")) {
        return
    }
    
    basicLightbox.create(`
		<img src="${largeImg}">
	`).show()
}


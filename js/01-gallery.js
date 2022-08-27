import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

function createMarkup(items) {
    return items.map(({preview, original, description}) => { 
        return `<div class="gallery__item">
                <a class="gallery__link" href="${original}" target="_parent">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
                </div>`;
    }).join('');
};

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()
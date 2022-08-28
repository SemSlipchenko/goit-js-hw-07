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

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(e) { 
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    };
    const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="800">`);
    instance.show();

    addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            instance.close();
        }
    });
};
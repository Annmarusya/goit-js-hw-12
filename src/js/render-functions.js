import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const loader = document.querySelector(".loader");
const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});
export function createGallery(images) {
    const gallery = document.querySelector(".gallery");
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="gallery-item">
            <a href="${largeImageURL}" class="gallery-link">
                <img src="${webformatURL}" alt="${tags}" class="gallery-image" width="300">
            </a>
            <div class="gallery-info">
                <p><b>Likes:</b> ${likes}</p>
                <p><b>Views:</b> ${views}</p>
                <p><b>Comments:</b> ${comments}</p>
                <p><b>Downloads:</b> ${downloads}</p>
            </div>
        </li>
    `).join("");
    gallery.innerHTML = markup; 
    lightbox.refresh();
}
export function clearGallery() {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";
}
export function showLoader() {
    loader.classList.remove("hidden");
}
export function hideLoader() {
    loader.classList.add("hidden");
}

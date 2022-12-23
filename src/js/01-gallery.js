// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

// console.log(SimpleLightbox);
// console.log("HI")

console.log('qreyqtwrqrqwrqrq');

const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);

const markup = galleryItems
  .map(
    item =>
      ` <div class="gallery__item">
    <a class="gallery__link" href=${original}>
      <img
        class="gallery__image"
        src=${preview}
        data-source=${original}npnpm
        alt=${description}
      />
    </a>
  </div>`
  )
  .join('');

// galleryEl.insertAdjacentHTML('afterbegin', markup);
galleryEl.innerHTML(markup);

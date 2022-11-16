const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const galleryEl = document.querySelector(".gallery");

// const pictures = images.map((image) => {
//   const itemEL = document.createElement("li");
//   const imageEl = document.createElement("img");
//   imageEl.classList.add("gallery__img");
//   imageEl.src = image.url;
//   imageEl.alt = image.alt;
//   imageEl.width = 480;
//   imageEl.style.backgroundColor = "teal";

//   itemEL.appendChild(imageEl);

//   return itemEL;
// });

// galleryEl.append(...pictures);

// const createGallery = (gallery) => {
//   return gallery.map((image) => {
//     const itemEL = document.createElement("li");
//     const imageEl = document.createElement("img");
//     imageEl.classList.add("gallery__img");
//     imageEl.src = image.url;
//     imageEl.alt = image.alt;
//     imageEl.width = 480;
//     imageEl.style.backgroundColor = "teal";

//     itemEL.appendChild(imageEl);

//     return itemEL;
//   });
// };

// const pictures = createGallery(images);
// galleryEl.append(...pictures);

// galleryEl.insertAdjacentHTML("afterbegin", ...pictures);



// 3. Варіант через шаблонний рядок

const galleryEl = document.querySelector(".gallery");

const makeGalleryItemMarkup = ({ url, alt }) => {
  return `
  <li>
    <img class="gallery__img" src='${url}' alt='${alt}'>
  </li>`;
};

const makeGalleryMarkup = images.map(makeGalleryItemMarkup).join("");

galleryEl.insertAdjacentHTML("afterbegin", makeGalleryMarkup);

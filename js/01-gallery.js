// import { galleryItems } from "./gallery-items.js";
// // Change code below this line

// // console.log(galleryItems);

// const listEl = document.querySelector(".gallery");
// listEl.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
// listEl.addEventListener("click", hadleClick);
// function createMarkup(element) {
//   return element

//     .map(
//       ({ preview, original, description }) => `

//   <li class="gallery__item">
//    <a class="gallery-link" href="${original}">
//  <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     /></a>
//  </li>`
//     )
//     .join("");
// }

// function hadleClick(event) {
//   event.preventDefault();
//   if (event.target === event.currentTarget) {
//     return;
//   }

//   const instance = basicLightbox.create(
//     ` <img src="${event.target.dataset.source}"
//      alt="${event.target.alt}"/> `,
//     {
//       onShow: () => {
//         document.addEventListener("keydown", closeModal);
//       },
//       onClose: () => {
//         document.removeEventListener("keydown", closeModal);
//       },
//     }
//   );

//   instance.show();
//   function closeModal(ev) {
//     if (ev.code !== "Escape") {
//       return;
//     }
//     instance.close();
//   }
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total = order[i] + total;
//   }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// function findLongestWord(string) {
//   // Change code below this line
//   let longestWord = "";
//   const array = string.split(" ");
//   for (let i = 0; i < array.length; i += 1) {
//     const currentWord = array[i];
//     if (currentWord.length > longestWord.length) {
//       longestWord = currentWord;
//     }
//   }
//   return longestWord;

//   // Change code above this line
// }

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));

// function filterArray(numbers, value) {
//   const newArray = [];
//   for (let i = 0; i <= numbers.length; i += 1)
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }

//   return newArray;

//   // Change code below this line
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   if (fruits.includes(fruit)) {
//     return true;
//   }
//   return false;
// }

// console.log(checkFruit("plum"));
// console.log(checkFruit("Pear"));

localStorage.setItem("Test_key", JSON.stringify([1, 2, 3, 4]));

console.log(JSON.parse(localStorage.getItem("Test_key")));
// localStorage.removeItem("Test_key");

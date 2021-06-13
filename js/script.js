const menu = [
  {
    id: 1,
    title: "pancakes",
    image: "../img/pancakes.jpg",
    price: "$15",
    text: "0 Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio libero laborum velit. Ipsum assumenda excepturi quae! Nam, eius atque!",
  },
  {
    id: 2,
    title: "waffles",
    image: "https://www.tasteandtellblog.com/wp-content/uploads/2020/01/Best-Waffle-Recipe-tasteandtellblog.com-1.jpg",
    price: "$12",
    text: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio libero laborum velit. Ipsum assumenda excepturi quae! Nam, eius atque!",
  },
  {
    id: 3,
    title: "sandwich",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190322-ham-sandwich-horizontal-1553721016.png",
    price: "$20",
    text: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio libero laborum velit. Ipsum assumenda excepturi quae! Nam, eius atque!",
  },
];

let currentItem = 0;

const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const itemName = document.querySelector(".item-name");
const photo = document.querySelector(".photo");
const price = document.querySelector(".price");
const text = document.querySelector(".text");

window.addEventListener("DOMContentLoaded", function () {
  showMenuItem();
});

function showMenuItem() {
  const onDisplay = menu[currentItem];
  itemName.textContent = onDisplay.title;
  photo.src = onDisplay.image;
  price.textContent = onDisplay.price;
  text.textContent = onDisplay.text;
}

nextBtn.addEventListener("click", function () {
  currentItem++;

  if (currentItem > menu.length - 1) {
    currentItem = 0;
  }
  showMenuItem();
});

prevBtn.addEventListener("click", function () {
  currentItem--;

  if (currentItem < 0) {
    currentItem = menu.length - 1;
  }
  showMenuItem();
});

const pancakeBtn = document.querySelector(".pancakeBtn");
const waffleBtn = document.querySelector(".waffleBtn");
const sandwichBtn = document.querySelector(".sandwichBtn");

pancakeBtn.addEventListener("click", function () {
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].title === 'pancakes') {
            currentItem = 0;
            showMenuItem();
        }
    }
});
waffleBtn.addEventListener("click", function () {
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].title === 'waffles') {
            currentItem = 1;
            showMenuItem();
        }
    }
});
sandwichBtn.addEventListener("click", function () {
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].title === 'sandwich') {
            currentItem = 2;
            showMenuItem();
        }
    }
});

























// console.log(menu[2].title.includes('sandwich'));

// const returnItem = menu.map(function(elem) {
//     return (elem.title, elem.id+1)
// })

// console.log(returnItem);

// const rockets = [
//     { country:'Russia', launches:32 },
//     { country:'US', launches:23 },
//     { country:'China', launches:16 },
//     { country:'Europe(ESA)', launches:7 },
//     { country:'India', launches:4 },
//     { country:'Japan', launches:3 }
// ];

// function check() {
// for (let i = 0; i < rockets.length; i++) {
//   let result = rockets[i].launches;

//   if (result === 32) {
//       console.log(result);
//       filterBtn.textContent = result;
//   }

// }

// }

// check();

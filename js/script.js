const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const lunchBtn = document.querySelector(".lunchBtn");
const breakfastBtn = document.querySelector('.breakfastBtn');
const shakesBtn = document.querySelector('.shakesBtn');
const dinnerBtn = document.querySelector('.dinnerBtn');
const allItems = document.querySelector('.allItems');


window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems();
});

function displayMenuItems() {
  let displayMenu = menu.map(function (item) {
    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.img} />
      <div class="item-info">
          <header>
          <h4>${item.title}</h4>
          <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
          ${item.desc}
          </p>
      </div>
  </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

// All items

allItems.addEventListener("click", function() {
  displayMenuItems();
})

// Lunch

function lunchSearch() {
  let displayLunch = menu.map(function (lunch) {
    if (lunch.category === "lunch") {
      // return lunch.category;
      return `<article class="menu-item">
        <img src=${lunch.img} class="photo" alt=${lunch.img} />
        <div class="item-info">
            <header>
            <h4>${lunch.title}</h4>
            <h4 class="price">$${lunch.price}</h4>
            </header>
            <p class="item-text">
            ${lunch.desc}
            </p>
        </div>
    </article>`;
    }
  });
  displayLunch = displayLunch.join("");
  sectionCenter.innerHTML = displayLunch;
}

lunchBtn.addEventListener("click", function () {
  lunchSearch();
});


// breakfast


function breakfastSearch() {
  let displayBreakfast = menu.map(function(breakfast) {

    if (breakfast.category === "breakfast") {
      // console.log(breakfast);
      return `<article class="menu-item">
      <img src=${breakfast.img} class="photo" alt=${breakfast.img} />
      <div class="item-info">
          <header>
          <h4>${breakfast.title}</h4>
          <h4 class="price">$${breakfast.price}</h4>
          </header>
          <p class="item-text">
          ${breakfast.desc}
          </p>
      </div>
  </article>`;
   };
  });
  displayBreakfast = displayBreakfast.join("");
  sectionCenter.innerHTML = displayBreakfast;
}

breakfastBtn.addEventListener('click', function() {
  breakfastSearch()
});


// shakes

function shakesSearch() {
  let displayShakes = menu.map(function(shakes) {

    if (shakes.category === "shakes") {
      // console.log(breakfast);
      return `<article class="menu-item">
      <img src=${shakes.img} class="photo" alt=${shakes.img} />
      <div class="item-info">
          <header>
          <h4>${shakes.title}</h4>
          <h4 class="price">$${shakes.price}</h4>
          </header>
          <p class="item-text">
          ${shakes.desc}
          </p>
      </div>
  </article>`;
   };
  });
  displayShakes = displayShakes.join("");
  sectionCenter.innerHTML = displayShakes;
}

shakesBtn.addEventListener('click', function() {
  shakesSearch()
});

// dinner

function dinnerSearch() {
  let displayDinner = menu.map(function(dinner) {

    if (dinner.category === "dinner") {
      // console.log(breakfast);
      return `<article class="menu-item">
      <img src=${dinner.img} class="photo" alt=${dinner.img} />
      <div class="item-info">
          <header>
          <h4>${dinner.title}</h4>
          <h4 class="price">$${dinner.price}</h4>
          </header>
          <p class="item-text">
          ${dinner.desc}
          </p>
      </div>
  </article>`;
   };
  });
  displayDinner = displayDinner.join("");
  sectionCenter.innerHTML = displayDinner;
}

dinnerBtn.addEventListener('click', function() {
  dinnerSearch();
});

// search by click

const searchBtn = document.querySelector('.searchBtn');
const searchInput = document.querySelector('.search-input');

function searchFunction() {
  if (searchInput.value.toUpperCase() === "DINNER") {
    dinnerSearch();
  } else if (searchInput.value.toUpperCase() === "LUNCH") {
    lunchSearch();
  } else if (searchInput.value.toUpperCase() === "SHAKES") {
    shakesSearch();
  } else if (searchInput.value.toUpperCase() === "BREAKFAST") {
    breakfastSearch();
  } 
};

searchBtn.addEventListener('click', function() {
  searchFunction();
});

// search by keypress enter

window.addEventListener('keypress', function(enter) {
  if (enter.keyCode == 13) {
    searchFunction();
  }
});

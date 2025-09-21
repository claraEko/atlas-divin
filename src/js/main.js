var burger = document.querySelector("#burger");
var menu = document.querySelector("#nav");
var blueselector = document.querySelector("#blue-select");
var card = document.querySelector("#green");
var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);

window.addEventListener("resize", function () {
  if (window.innerWidth > 1024) {
    menu.classList.remove("is-active");
  }
});

const toggleDarkModeBtn = document.querySelector("#dark-mode-btn");
const toggleLightModeBtn = document.querySelector("#light-mode-btn");

toggleDarkModeBtn.addEventListener("click", function () {
  document.querySelector("html").setAttribute("data-theme", "dark");
});

toggleLightModeBtn.addEventListener("click", function () {
  document.querySelector("html").setAttribute("data-theme", "light");
});

const toggleDarkModeBtnb = document.querySelector("#dark-mode-btn-b");
const toggleLightModeBtnb = document.querySelector("#light-mode-btn-b");

toggleDarkModeBtnb.addEventListener("click", function () {
  document.querySelector("html").setAttribute("data-theme", "dark");
});

toggleLightModeBtnb.addEventListener("click", function () {
  document.querySelector("html").setAttribute("data-theme", "light");
});
var toggleBlue = function toggleBlue() {
  card.classList.toggle("is-active-blue");
};

document.addEventListener("DOMContentLoaded", () => {
  const buttons = {
    blue: document.querySelector("#blue-select"),
    red: document.querySelector("#red-select"),
    yellow: document.querySelector("#yellow-select"),
    green: document.querySelector("#green-select"),
  };

  const allCards = document.querySelectorAll(
    ".card-g, .card-r, .card-y, .card"
  );

  let activeFilter = null;

  function toggleCards(colorClass) {
    if (activeFilter === colorClass) {
      allCards.forEach((card) => card.classList.remove("hidden"));
      activeFilter = null;
    } else {
      allCards.forEach((card) => {
        if (card.classList.contains(colorClass)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
      activeFilter = colorClass;
    }
  }

  buttons.blue.addEventListener("click", () => toggleCards("card"));
  buttons.red.addEventListener("click", () => toggleCards("card-r"));
  buttons.yellow.addEventListener("click", () => toggleCards("card-y"));
  buttons.green.addEventListener("click", () => toggleCards("card-g"));
});

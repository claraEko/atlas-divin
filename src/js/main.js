var burger = document.querySelector("#burger");
var menu = document.querySelector("#nav");
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

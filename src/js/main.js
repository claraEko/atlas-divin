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

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

let menuOpenButton = document.querySelector(".menu__button"),
  mobileMenuWrapper = document.querySelector(".mobile-nav");
const w = window.innerWidth;
let menuWithSubmenu = document.querySelectorAll(".menu__item--with-submenu");
console.log(w);

if (w >= 1024) {
  menuWithSubmenu.forEach(menu => {
    menu.addEventListener("mouseover", e => {
      e.preventDefault();
      menu.classList.add("open");
    });
    menu.addEventListener("mouseleave", e => {
      e.preventDefault();
      menu.classList.remove("open");
    });
  });
} else {
  menuWithSubmenu.forEach(menu => {
    menu.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  });
}

menuOpenButton.addEventListener("click", revealMenu);

let revealMenu = () => {
  mobileMenuWrapper.classList["add"]("is-visible");
};

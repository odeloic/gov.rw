var menuOpenButton = document.querySelector('.menu__button'),
    mobileMenu = document.querySelector('.mobile-nav');

menuOpenButton.addEventListener('click', toggle);

function toggle() {
    mobileMenu.classList['add']('is-visible');
}
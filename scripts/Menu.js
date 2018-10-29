let menuOpenButton = document.querySelector('.menu__button'),
    mobileMenuWrapper = document.querySelector('.mobile-nav');

menuOpenButton.addEventListener('click', revealMenu);

let revealMenu = () => {
    mobileMenuWrapper.classList['add']('is-visible');
}
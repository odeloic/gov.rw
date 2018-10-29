import './scss/main.scss';
import './scripts/Menu';


let menuOpenButton = document.querySelector('.menu__button'),
    menuCloseButton = document.querySelector('.menu__close'),
    mobileMenuWrapper = document.querySelector('.mobile-nav');

menuOpenButton.addEventListener('click', revealMenu);
menuCloseButton.addEventListener('click', hideMenu);

function revealMenu() {
    mobileMenuWrapper.classList['add']('is-visible');
}

function hideMenu() {
    mobileMenuWrapper.classList.contains('is-visible') ? mobileMenuWrapper.classList['remove']('is-visible') : '';
}
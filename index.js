import './scss/main.scss';
import './scripts/Menu';
import Swiper from 'swiper/dist/js/swiper';
import $ from 'jquery';
import slick from 'slick-carousel';


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


let swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        600: {
            slidesPerView: 1
        }
    },
    navigation: {
        nextEl: '.in-page-nav__next',
        prevEl: '.in-page-nav__prev',
    },
});

$(document).ready(function () {
    $('.hero-slider').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        fadeSpeed: 1000
    });
})
// Navigation

var navigationWrapper = document.querySelector('.navigation'),
    menuWrapper = document.querySelector('.menu'),
    subMenuTriggers = document.querySelectorAll('li.menu__item--with-submenu');

subMenuTriggers.forEach(function (element) {
    element.addEventListener('click', function (e) {
        console.log(e.target.parentNode);
    })

})
class Menu {
    constructor() {
        this.menuOpenButton = document.querySelector('.menu__button');
        this.mobileMenu = document.querySelector('.mobile-nav');
        this.init();
    }

    init() {
        this.menuOpenButton.addEventListener('click', this.toggle.bind(this));
    }
    toggle() {
        this.mobileMenu.classList['add']('is-visible');
    }
}

export default Menu;
class Menu {
    constructor(navWrapper, subnavWapper) {
        this.navWrapper = navWrapper;
        this.subnavWapper = subnavWapper;
        this.triggers = document.querySelectorAll('.menu__item--with-submenu');
        this.events();
    }

    events() {
        this.triggers.forEach((item) => {
            // item.addEventListener('mouseover', this.revealSubMenu.bind(this));
            item.addEventListener('mouseover', function (e) {
                // e.stopImmediatePropagation();
                console.log(this.querySelector('.submenu'))
                this.querySelector('.submenu').classList['toggle']('acitve');
            })
        })

    }

    revealSubMenu() {
        console.log(this)
    }
}

export default Menu;
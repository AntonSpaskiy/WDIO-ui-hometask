const BaseComponent = require('./base.component');

class HamburgerMenu extends BaseComponent {
    
    constructor() {
        super('.hamburger-menu__dropdown');
    };

    item(param) {
        const selectors = {
            firstLevelDropdown: '.hamburger-menu__item.item--collapsed',
            firstLevelDropdownLink: '.hamburger-menu__link.first-level-link',
            secondLevelDropdown: '.third-level-item--collapsed', 
            hamburgerMenuLink: '.hamburger-menu__link',
            hamburgerActiveLink: '.hamburger-menu__link.active'
        };

        return this.rootEl.$(selectors[param]);
};
};

module.exports = HamburgerMenu;
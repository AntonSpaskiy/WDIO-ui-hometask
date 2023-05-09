const BaseComponent = require('./base.component');

class Header extends BaseComponent {
    
    constructor() {
        super('.header__content');
    };

    item(param) {
        const selectors = {
            searchBtn: 'button.header-search__button',
            headerLogo: '.header__logo-container',
            burgerBtn: 'button.hamburger-menu__button',
            burgerCloseBtn: 'button[aria-expanded="true"]',
            locationSelectorBtn: 'button.location-selector__button'
        };

        return this.rootEl.$(selectors[param]);
};
};

module.exports = Header;
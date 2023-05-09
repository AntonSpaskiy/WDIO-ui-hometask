const BaseComponent = require('./base.component');

class Footer extends BaseComponent {
    
    constructor() {
        super('.header__content');
    };

    item(param) {
        const selectors = {
            footerBrandsTitle: '.footer__brands-title',
            footerBrandsList: '.footer__brands-list'
        };

        return this.rootEl.$(selectors[param]);
};
};

module.exports = Footer;
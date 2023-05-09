const BaseComponent = require('./base.component');

class PageContent extends BaseComponent {
    
    constructor() {
        super('#main');
    };

    item(param) {
        const selectors = {
            breadCrumbsList: '.breadcrumbs__list',
        };

        return this.rootEl.$(selectors[param]);
};
};

module.exports = PageContent;
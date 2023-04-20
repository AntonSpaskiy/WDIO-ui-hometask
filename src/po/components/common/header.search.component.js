const BaseComponent = require('./base.component');

class HeaderSearch extends BaseComponent {
    
    constructor(){
        super('.header-search__panel');
    };

    get searchPanelOpened() {
        return $('.header-search__panel.opened');
    };

    item(param) {
        const selectors = {
            searchField: '#new_form_search',
            searchBtn: 'button.header-search__submit',
            frequentSearches: '.frequent-searches__items'
        };

        return this.rootEl.$(selectors[param]);
    };
};

module.exports = HeaderSearch;
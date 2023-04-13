const BaseComponent = require('./base.component')

class HeaderSearchComponent extends BaseComponent {
    
    constructor(){
        super('.header-search__panel')
    };
    get searchPanelOpened() {
        return $('.header-search__panel.opened')
    };
    
    item(param) {
        const selectors = {
            searchField: '#new_form_search',
            searchBtn: 'button.header-search__submit'
        };
        return this.rootEl.$(selectors[param]);
    }
    

}

module.exports = HeaderSearchComponent;
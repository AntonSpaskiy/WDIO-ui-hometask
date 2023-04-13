const BaseComponent = require('./base.component')

class HeaderComponent extends BaseComponent{
    
    constructor(){
        super('.header__content')
    };
    get searchBtn() {
        return this.rootEl.$('button.header-search__button')
    };
    get headerLogo() {
        return this.rootEl.$('.header__logo-container')
    }
}
module.exports = HeaderComponent;
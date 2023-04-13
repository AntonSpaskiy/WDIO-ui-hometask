const BasePage = require('./base.page')
const HeaderComponent = require('./../components/common/header.component')
const HeaderSearchComponent = require('./../components/common/header.search.component')

class HomePage extends BasePage{

    constructor() {
        super('/')
        this.headerComponent = new HeaderComponent();
        this.headerSearchComponent = new HeaderSearchComponent();
    };

}

module.exports = HomePage;
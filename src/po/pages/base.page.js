const HeaderComponent = require('./../components/common/header.component')
const HeaderSearchComponent = require('./../components/common/header.search.component')

class BasePage {

    constructor(url) {
        this.url = url;
       // this.headerComponent = new HeaderComponent();
        //this.headerSearchComponent = new HeaderSearchComponent()
    };

    open() {
        return browser.url(this.url);
    } 
}

module.exports = BasePage;
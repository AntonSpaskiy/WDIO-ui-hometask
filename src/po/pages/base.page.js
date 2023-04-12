// const Header = require('./../components/common/header.component')
// const HeaderSearch = require('./../components/common/header.search.component')

class BasePage {

    constructor(url) {
        this.url = url;
        this.header = new Header();
      //  this.headerSearch = new HeaderSearch()
    };

    /*/ open() {
        return browser.url(this.url);
    } /*/
}

module.exports = BasePage;
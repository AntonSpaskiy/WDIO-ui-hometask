const { Header, HeaderSearch, SearchResults } = require('./../components/')

class BasePage {

    constructor(url) {
        this.url = url;
        this.header = new Header();
        this.headerSearch = new HeaderSearch();
        this.searchResults = new SearchResults ();
    };

    open() {
        return browser.url(this.url);
    } 
}

module.exports = BasePage;
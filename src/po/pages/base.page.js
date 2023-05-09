const { Header, HeaderSearch, SearchResults, HamburgerMenu, PageContent, LocationSelector, Footer } = require('./../components/');

class BasePage {

    constructor(url) {
        this.url = url;
        this.header = new Header();
        this.headerSearch = new HeaderSearch();
        this.searchResults = new SearchResults ();
        this.hamburgerMenu = new HamburgerMenu();
        this.pageContent = new PageContent();
        this.locationSelector = new LocationSelector();
        this.footer = new Footer()
    };

    open() {
        return browser.url(this.url);
    };
};

module.exports = BasePage;
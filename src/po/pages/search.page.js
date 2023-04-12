const SearchComponent = require('./../components/results/search.component')

class SearchPage {

    constructor() {
        this.searchComponent = new SearchComponent();
    };

    async open() {
        await browser.url('https://www.epam.com/search?q=null');
    }
}

module.exports = SearchPage;
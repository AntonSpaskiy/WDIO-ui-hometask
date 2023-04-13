const BasePage = require('./base.page')
const SearchComponent = require('./../components/results/search.component')

class SearchPage extends BasePage{

    constructor() {
        super('/search?q=null')
        this.searchComponent = new SearchComponent();
    };
}

module.exports = SearchPage;
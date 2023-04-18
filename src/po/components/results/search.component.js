class SearchResults {
    
    get rootEl() {
        return $('.section__wrapper')
    };
    get searchResultsCounter() {
        return this.rootEl.$('.search-results__counter')
    };
}
module.exports = SearchResults;
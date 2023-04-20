const HomePage = require('./home.page');
const SearchPage = require('./search.page');

/**
 * @param name {'home' | 'search'};
 * @returns {HomePage | SearchPage}
 */
function pages(name){
    const items = {
        home: new HomePage(),
        search: new SearchPage(),
    };
    return items[name.toLowerCase()];
};

module.exports = {
    HomePage,
    SearchPage,
    pages
};
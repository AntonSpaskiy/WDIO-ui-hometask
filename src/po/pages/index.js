const HomePage = require('./home.page');
const SearchPage = require('./search.page');
const BasePage = require('./base.page')
/**
 * @param name {'base' |'home' | 'search'};
 * @returns {BasePage | HomePage | SearchPage}
 */
function pages(name){
    const items = {
        base: new BasePage(),
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
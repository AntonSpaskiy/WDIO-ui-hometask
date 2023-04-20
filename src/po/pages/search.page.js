const BasePage = require('./base.page');

class SearchPage extends BasePage{

    constructor() {
        super('/search?q=null');
    };
};

module.exports = SearchPage;
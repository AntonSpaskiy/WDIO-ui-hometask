const HeaderSearch = require('../components/common/header.search.component');
const headerSearch = new HeaderSearch();

class functions {

    get searchValue() {
        return "Automation";
    };
    
    async recentLinkName(){
        const items = await $$(".frequent-searches__item");
        const index = Math.floor(Math.random() * items.length);
        return await items[index].getText();
    };

    async selectSearchItem(value) {
        const dropdown = await headerSearch.item('frequentSearches').$(`li*=${value}`);
        if (await dropdown.isDisplayed()) {
            return dropdown.click();
        }
        return headerSearch.item('searchField').addValue(value);
        }
}

module.exports = new functions();
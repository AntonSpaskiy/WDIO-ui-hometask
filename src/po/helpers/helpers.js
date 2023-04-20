const HeaderSearch = require('../components/common/header.search.component');
const headerSearch = new HeaderSearch();

class functions {
    
    async recentLinkName(){
        const items = await headerSearch.item("frequentSearches").$$("li");
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
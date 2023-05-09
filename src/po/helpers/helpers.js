const {HeaderSearch, HamburgerMenu, Header, LocationSelector} = require('../components');
const headerSearch = new HeaderSearch();
const hamburgerMenu = new HamburgerMenu();
const header = new Header();
const locationSelector = new LocationSelector();

class functions {
    
    async recentLinkName(){
        const items = await headerSearch.item("frequentSearches").$$('li');
        const index = Math.floor(Math.random() * items.length);
        return await items[index].getText();
    };

    async selectSearchItem(value) {
        const dropdown = await headerSearch.item('frequentSearches').$(`li*=${value}`);
        if (await dropdown.isDisplayed()) {
            return dropdown.click();
        }
        return headerSearch.item('searchField').addValue(value);
    };

    async firstLevelBurgerName(){
        const items = await $$('.hamburger-menu__link.first-level-link');
        const index = Math.floor(Math.random() * items.length);
        var text = await items[index].getProperty('outerText');
        if (await text === 'Industries') {
            var text = 'About'
        };
        return text
    };

    async selectParentDropdown(value) {
        const dropdownItem = await hamburgerMenu.rootEl.$(`*=${value}`);
        return await dropdownItem.click();
    };

}

module.exports = new functions();
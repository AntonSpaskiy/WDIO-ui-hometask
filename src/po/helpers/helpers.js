const HeaderSearch = require('../components/common/header.search.component')

class functions {

    get searchValue() {
        return "Automation"
    }
    
    async recentLinkName(){
        const items = await $$(".frequent-searches__item")
        const index = Math.floor(Math.random() * items.length)
        return await items[index].getText()
    }
    async selectInDropdown(searchItem) {
    const headerSearch = new HeaderSearch()
    await headerSearch.item('frequentSearches').$(`li*=${searchItem}`).click()
}
}

module.exports = new functions();
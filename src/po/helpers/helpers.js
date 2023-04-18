const HeaderSearch = require('../components/common/header.search.component')

class functions {

    get searchValue() {
        return "Automation"
    }
    
    async selectInDropdown() {
    const headerSearch = new HeaderSearch()
    await headerSearch.item('frequentSearches').$(`li*=${this.searchValue}`).click()
}
}

module.exports = new functions();
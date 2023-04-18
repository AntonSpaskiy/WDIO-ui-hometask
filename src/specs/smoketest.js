const {pages} = require('./../po/')
const functions = require('./../po/helpers/helpers')

describe('Hometask', () => {

    beforeEach(async () => {
        await pages('home').open();
    }),

    it('Check title of the website', async () => {
        await expect(browser).toHaveTitle('EPAM | Software Engineering & Product Development Services')
    });

    it('Check that the header logo is existing', async () => {
        await expect(pages('home').header.headerLogo).toBeExisting()
    });

    it('Check that the text "RESULTS FOR “AUTOMATION" is existing on search results page', async () => {
        await pages('home').header.searchBtn.click();
        await pages('home').headerSearch.searchPanelOpened.waitForDisplayed();
        await pages('home').headerSearch.item('searchField').click();
        await functions.selectInDropdown();
        // await pages('home').headerSearch.item('searchField').addValue('automation');
        await pages('home').headerSearch.item('searchBtn').click();
        await expect(pages('search').searchResults.searchResultsCounter).toHaveTextContaining(`results for "${functions.searchValue}"`, {ignoreCase: true});
    });
})
const {pages, testData} = require('./../po/');
const functions = require('./../po/helpers/helpers');

describe('Hometask', () => {

    beforeEach(async () => {
        await pages('home').open();
    });

    it('Check title of the website', async () => {
        await expect(browser).toHaveTitle('EPAM | Software Engineering & Product Development Services');
    });

    it('Check that the header logo is existing', async () => {
        await expect(pages('home').header.headerLogo).toBeExisting();
    });

    it('Check that the text "RESULTS FOR {searchValue}" text is existing on search results page after search', async () => {
        await pages('home').header.searchBtn.click();
        await pages('home').headerSearch.searchPanelOpened.waitForDisplayed();
        await functions.selectSearchItem(testData.search.searchValue);
        await pages('home').headerSearch.item('searchBtn').click();
        await expect(pages('search').searchResults.searchResultsCounter).toHaveTextContaining(`results for "${testData.search.searchValue}"`, {ignoreCase: true});
    });

    it('Check that the text "RESULTS FOR {searchValue}" is existing on search results page after clicking an autosuggestions item', async () => {
        await pages('home').header.searchBtn.click();
        await pages('home').headerSearch.searchPanelOpened.waitForDisplayed();
        const recentLinkName = await functions.recentLinkName();
        await functions.selectSearchItem(recentLinkName);
        await pages('home').headerSearch.item('searchBtn').click();
        await expect(pages('search').searchResults.searchResultsCounter).toHaveTextContaining(`results for "${recentLinkName}"`, {ignoreCase: true});
    });
});
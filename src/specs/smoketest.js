const HomePage = require('../po/pages/home.page')
const homePage = new HomePage()
const SearchPage = require('../po/pages/search.page')
const searchPage = new SearchPage()

describe('Hometask', () => {

    beforeEach(async () => {
        await homePage.open();
    }),

    it('Check title of the website', async () => {
        await expect(browser).toHaveTitle('EPAM | Software Engineering & Product Development Services')
    });

    it('Check that the header logo is existing', async () => {
        await expect(homePage.headerComponent.headerLogo).toBeExisting()
    });

    it('Check that the text "RESULTS FOR “AUTOMATION" is existing on search results page', async () => {
        await homePage.headerComponent.searchBtn.click();
        await homePage.headerSearchComponent.searchPanelOpened.waitForDisplayed();
        await homePage.headerSearchComponent.item('searchField').addValue('automation');
        await homePage.headerSearchComponent.item('searchBtn').click();
        await expect(searchPage.searchComponent.searchResultsCounter).toHaveTextContaining('result for "automation"', {ignoreCase: true});
    });
})



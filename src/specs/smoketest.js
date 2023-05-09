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
        await expect(pages('home').header.item('headerLogo')).toBeExisting();
    });

    it('Check that it is possible to change the language of the website to Ukrainian', async () => {
        await pages('home').header.item('locationSelectorBtn').click();
        await pages('home').locationSelector.item('locationItemUA').waitForClickable({ timeout: 3000 });
        await pages('home').locationSelector.item('locationItemUA').click();
        await $('.overlay.hidden').waitForExist();
        await expect(pages('home').header.item('locationSelectorBtn').toHaveText("Україна (UA)"));
        await expect(pages('home').footer.item('footerBrandsTitle').toHaveText("Наші Бренди", {ignoreCase: true}));
        await browser.url("https://www.epam.com")
    });

    it('Check that the text "RESULTS FOR {searchValue}" text is existing on search results page after search', async () => {
        await pages('home').header.item('searchBtn').click();
        await pages('home').headerSearch.searchPanelOpened.waitForDisplayed();
        await pages('home').headerSearch.item('searchField').setValue(testData.search.searchValue);
        await pages('home').headerSearch.item('searchSubmit').click();
        await expect(pages('search').searchResults.searchResultsCounter).toHaveTextContaining(`results for "${testData.search.searchValue}"`, {ignoreCase: true});
    });

    it('Check that the text "RESULTS FOR {searchValue}" is existing on search results page after clicking an autosuggestions item', async () => {
        await pages('home').header.item('searchBtn').click();
        await pages('home').headerSearch.searchPanelOpened.waitForDisplayed();
        const recentLinkName = await functions.recentLinkName();
        await functions.selectSearchItem(recentLinkName);
        await pages('home').headerSearch.item('searchSubmit').click();
        await expect(pages('search').searchResults.searchResultsCounter).toHaveTextContaining(`results for "${recentLinkName}"`, {ignoreCase: true});
    });

    it('Check that selected menu item is opened and highlighted', async () => {
        await pages('home').header.item('burgerBtn').click();
        await pages('home').header.item('burgerCloseBtn').waitForExist();
        const firstLevelBurgerName = await functions.firstLevelBurgerName();
        await functions.selectParentDropdown(firstLevelBurgerName);
        await expect(pages('base').pageContent.item('breadCrumbsList').$$('li')[2].toHaveText(`${this.firstLevelBurgerName}`));
        await pages('home').header.item('burgerBtn').click();
        await pages('home').header.item('burgerCloseBtn').waitForExist();
        await expect(pages('home').hamburgerMenu.item('hamburgerActiveLink')).toHaveTextContaining(firstLevelBurgerName);
    });
})
const HeaderComponent = require('./../components/common/header.component')
const HeaderSearchComponent = require('./../components/common/header.search.component')

class HomePage {
    constructor() {
        this.headerComponent = new HeaderComponent();
        this.headerSearchComponent = new HeaderSearchComponent();
    };

    async open() {
        await browser.url('https://www.epam.com/');
    }
}

module.exports = HomePage;
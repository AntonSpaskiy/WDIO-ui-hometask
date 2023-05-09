const BaseComponent = require('./base.component');

class LocationSelector extends BaseComponent {
    
    constructor() {
        super('.location-selector__panel');
    };

    item(param) {
        const selectors = {
            locationItemUA: 'a[lang="uk"]',
        };

        return this.rootEl.$(selectors[param]);
};
};

module.exports = LocationSelector;
            
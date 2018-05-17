module.exports = {
    beforeEach : browser => {
        browser.url('https://devmountain-qa.github.io/weatherman/build/index.html')
            .waitForElementPresent('body', 5000, 'Checking that the page loaded.')
    },
    after : browser => {
        browser.end()
    },
    'My first test' : browser => {
        browser.verify.containsText('h1[class="app__title"]', 'WEATHERMAN', 'Checking that the page title is correct.')
    },
    'Search San Francisco' : browser => {
        browser.setValue('input', 'San Francisco')
            .click('button')
            .waitForElementNotPresent('input', 5000)
            .waitForElementPresent('.current-weather__location', 5000)
            .assert.containsText('.current-weather__location', 'San Francisco', 'Checking that the city name in the results is correct.')
    }
}
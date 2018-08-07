module.exports = {

    url: 'https://www.wwz.ch/',

    elements: {
        produkteBtn : by.css("li.menu-navigation-element.wwz-blue:nth-child(1) a.wwz-navigation-arrow > span.wwz-hover"),
        stromBtn : by.css("ul.sub-menu.wwz-blue.open.f-open-dropdown li:nth-child(1) a.wwz-hover > div:nth-child(2)")
    },

    open: async function(){
        await helpers.loadPage('https://www.wwz.ch');
    },
    navigateToStrom: async function () {
        await driver.findElement(page.wwzStart.elements.produkteBtn).click();
        return await driver.findElement(page.wwzStart.elements.stromBtn).click();
    }

};
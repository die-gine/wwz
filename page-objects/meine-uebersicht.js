module.exports = {

    url: 'https://www.wwz.ch/uebersicht',

    elements: {
        //main menu
        meinWWZ: by.css(shared.testData.meinWWZ),
        //page elements
        title : by.css("h1#wwz-content-title"),
        closeLoginDropdown : by.css("img.login-dropdown-close"),
        kundennr : by.css("div.columns:nth-child(2) > label.ng-binding"),
    },












    //CHECKS

    checkTitle: async function(expt_title){
        var selector = page.meineUebersicht.elements.title;
        await driver.wait(until.elementsLocated(selector), 5000);
        var shownTitle = await driver.findElement(page.meineUebersicht.elements.title).getText();
        shownTitle = await shownTitle.toLowerCase();
        expt_title = await expt_title.toLowerCase();
        expect(shownTitle.replace("­","")).to.equal(expt_title);
    },
    checkKundennummer: async function(nr){
        var element = driver.findElement(page.wwzStart.elements.loginDropdown);
        var shownNr = await driver.findElement(page.meineUebersicht.elements.kundennr).getText();
        expect (shownNr.replace("Kundenummer: ","")).to.equal(nr);

    }


};
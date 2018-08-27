module.exports = {

    url: 'https://www.wwz.ch/rechnungsuebersicht',

    elements: {
        //main menu
        meinWWZ: by.css(shared.testData.meinWWZ),
        body: by.css("body"),
        //page elements
        text: by.css("div > p"),

    },




    //CHECKS
    checkBodyMessage: async function(msg){
        var refPos = page.meineUebersicht.elements.refPosition;
        await driver.wait(until.elementsLocated(refPos), 5000);

        var text = await driver.findElement(page.wwzStart.elements.body).getText();
        return await expect(text).to.contain(msg);
    }

};
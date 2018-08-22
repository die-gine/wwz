module.exports = {

    url: 'https://www.wwz.ch/abmelden',

    elements: {
        //main menu
        meinWWZ: by.css(shared.testData.meinWWZ),
        body: by.css("body"),
        //page elements
        text: by.css("div > p"),

    },




    //CHECKS
    checkText: async function(expt_text){
        var body = page.abmelden.elements.body;
        await driver.wait(until.elementsLocated(body), 5000);
        expect(await driver.findElement(body).getText()).to.have.string(expt_text);
    }

};
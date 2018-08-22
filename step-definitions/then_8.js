module.exports = function () {


    this.Then(/^sehe ich "([^"]*)"$/, async function (title) {
        return await page.meineUebersicht.checkTitle(title);
    });

    this.Then(/^befinde ich mich in meinem Nutzeraccount \- "([^"]*)"$/, async function (nr) {
        return await page.meineUebersicht.checkKundennummer(nr);
    });

    this.Then(/^der Text "([^"]*)" wird angezeigt$/, async function (text) {
        return await page.abmelden.checkText(text);
    });


};

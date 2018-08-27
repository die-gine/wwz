module.exports = function () {

    //produkte > strom page

    this.Then(/^erscheint die Fehlermeldung "([^"]*)"$/, async function (msg) {
        return await page.stromProdukte.checkIfPLZErrorMessageVisible(msg);
    });

    this.Then(/^beträgt die vorgeschlagene Verbrauchsmenge "([^"]*)" kWh$/, async function (verbrauch) {
        return await page.stromProdukte.checkDefaultConsumption(verbrauch);
    });

    this.Then(/^erhöht sich der vorgeschlagene monatliche Preis der Produkte$/, async function () {
        return await page.stromProdukte.checkIfProductPriceIncresed();
    });

    this.Then(/^verringert sich der vorgeschlagene monatliche Preis der Produkte$/, async function () {
        return await page.stromProdukte.checkIfProductPriceDecresed();
    });

    this.Then(/^sehe ich die Zusammenfassung meiner Eingaben \- "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/, async function (product, anrede, nachname, plz, ort) {
        return await page.stromProdukte.checkFormSummary(product, anrede, nachname, plz, ort);
    });

    this.Then(/^haben alle Einträge der Liste "([^"]*)" eine Verlinkung zur Info\-PDF$/, async function (prod) {
        return await page.stromProdukte.checkPriceList2018HrefToPDF(prod);
    });



    // meine übersicht page

    this.Then(/^sehe ich den Titel "([^"]*)"$/, async function (title) {
        return await page.meineUebersicht.checkTitle(title);
    });

    this.Then(/^befinde ich mich in meinem Nutzeraccount \- "([^"]*)"$/, async function (nr) {
        return await page.meineUebersicht.checkKundennummer(nr);
    });

    this.Then(/^sehe ich meinen Bezugsort "([^"]*)"$/, async function (location) {
        return await page.meineUebersicht.checkReferenceLocation(location);
    });

    this.Then(/^sehe ich meine letzte Rechnung vom "([^"]*)"$/, async function (invDate) {
        return await page.meineUebersicht.checkInvoiceByDate(invDate);
    });

    // rechnungsuebersicht page

    this.Then(/^sehe ich die Meldung "([^"]*)"$/, async function (msg) {
        return await page.rechnungsuebersicht.checkBodyMessage(msg);
    });


    // abmelden page

    this.Then(/^der Text "([^"]*)" wird angezeigt$/, async function (text) {
        return await page.abmelden.checkText(text);
    });

};

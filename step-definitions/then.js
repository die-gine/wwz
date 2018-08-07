module.exports = function () {

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

};

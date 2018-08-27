module.exports = function () {

    //startpage

    this.When(/^ich auf Produkte Strom klicke$/, async function () {
        return await page.wwzStart.navigateToStrom();
    });

    this.When(/^ich die Verfügbarkeit für meine Postleitzahl "([^"]*)" prüfe$/, async function (plz) {
        return await page.stromProdukte.insertPLZAndEnter(plz);
    });

    this.When(/^ich ca (\d+) kWh Verbrauchsmenge angebe$/, async function (kWh,) {
        return await page.stromProdukte.setConsumption(kWh);
    });

    this.When(/^ich mich anmelde \- "([^"]*)", "([^"]*)"$/, async function (username, pwd) {
        return await page.wwzStart.login(username,pwd);
    });

    this.When(/^ich mich abmelde$/, async function () {
        return await page.wwzStart.logout();
    });

    this.When(/^ich mich als Testnutzer anmelde$/, async function () {
        return await page.wwzStart.login(shared.testData.username,shared.testData.password);
    });

    this.When(/^ich "([^"]*)" klicke$/, async function (btn) {
        if(btn=="Weiter"){
            return await page.stromProdukte.submitCalculator();
        }else if(btn=="Weiter zur Zusammenfassung"){
            return await page.stromProdukte.submitForm();
        }else{
            console.log("TODO ERROR");
        }
    });

    //products > strom page

    this.When(/^ich folgende persönlichen Daten eintrage \- "([^"]*)", "([^"]*)", "([^"]*)"$/, async function (anrede, name, nachname) {
        return await page.stromProdukte.setPeronalData(anrede, name, nachname);
    });

    this.When(/^ich folgende Adressdaten eintrage \- "([^"]*)", "([^"]*)", "([^"]*)"$/, async function (strasse, nr, ort) {
        return await page.stromProdukte.setAdressData(strasse, nr, ort);
    });

    this.When(/^ich folgende Kontaktdaten eintrage \- "([^"]*)", "([^"]*)"$/, async function (mail, tel) {
        return await page.stromProdukte.setContactData(mail, tel);
    });

    this.When(/^ich die Liste "([^"]*)" öffne$/, async function (product) {
        return await page.stromProdukte.selectProductPriceList(product);
    });


    //account overview page

    this.When(/^ich mein Vertragskonto "([^"]*)" wähle$/, async function (contractAccountNr) {
        return await page.meineUebersicht.selectContractAccountByNr(contractAccountNr);
    });
    this.When(/^ich zur Rechnungsübersicht navigiere$/, async function () {
        return await page.meineUebersicht.goToInvoiceOverview();
    });


};

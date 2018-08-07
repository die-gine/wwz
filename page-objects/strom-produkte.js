module.exports = {

    url: 'https://www.wwz.ch/produkte/strom-produkte.html',

    elements: {
        plzInput : by.css("input#plz"),
        plzErrorMsg: by.css("div.columns.ng-scope:nth-child(1) div.row div.step-line div.clearfix > span.ng-binding"),
        defConsumption: by.xpath('//div[1]/div[3]/div[1]/div[1]/div[1]/span[3]'),
        moreConBtn: by.css(".icon-more-quantity.right"),
        lessConBtn: by.css(".icon-less-quantity.left"),
        priceFirstProduct: by.css("div.clearfix.cursor-pointer.ng-scope:nth-child(1) div div.tariff-product-price > span.tariff-product-text-1.ng-binding"),
        submitCalculatorBtn: by.css("input.tariff-calculator-submit-button[value='Weiter']"),
        submitFormBtn: by.css("div[ng-click='goToSummaryClick(event)'] input[value='Weiter']:not(.tariff-calculator-submit-button)"),
        salutationDropDown:by.css("div.ng-scope:nth-child(2) input.nli-button.dropdown-icon"),
        selectHerr: by.xpath("//div[2]/div[1]/div[2]/ul[1]/li[2]"),
        selectFrau: by.xpath("//div[2]/div[1]/div[2]/ul[1]/li[1]"),
        surnameInsert: by.css("input#nliIDA_Surname"),
        lastnameInsert: by.css("input#nliIDA_lastname"),
        streetInsert: by.css("input#nliIDA_Street"),
        nrInsert: by.css("input#nliIDA_HouseNumber"),
        cityInsert: by.css("input#nliIDA_CityFuture"),
        emailInsert: by.css("input[name='nli_IDA_Email']"),
        telInsert: by.css("input#nliIDA_phone"),
        productSummary: by.css("div.products-overview span.tariff-product-text-1"),
        nameSummary: by.css("div.products-overview-details > span.ng-binding:nth-child(2)"),
        plzCitySummary: by.css("div.products-overview-details > span.ng-binding:nth-child(6)"),

    },

    getConsumption: async function () {
        var defConsumption = page.stromProdukte.elements.consumption;
            var element = await driver.findElement(defConsumption);
            return parseFloat(element.getAttribute("aria-valuenow"));
    },

    insertPLZAndEnter: async function(plz) {
        var plzIn = page.stromProdukte.elements.plzInput;
        await driver.wait(until.elementsLocated(plzIn), 5000);
        return await driver.findElement(plzIn).sendKeys(plz, selenium.Key.ENTER);
    },

    checkIfPLZErrorMessageVisible: async function(expected_msg){
        var plzMsg = await driver.findElement(page.stromProdukte.elements.plzErrorMsg).getText();
        return await expect(expected_msg).to.contain(plzMsg);
    },

    setConsumption: async function(kWh){
        var selector = page.stromProdukte.elements.defConsumption;
        var current = await driver.findElement(selector).getAttribute("aria-valuenow");

        //calculate the difference between current and target value to decide to click more or less button
        if(parseInt(kWh,10) > parseInt(current,10)+1){
            var click = (parseInt(kWh,10) - parseInt(current,10))/50 ;
            for (i = 0; i < click; i++) {
                await driver.findElement(page.stromProdukte.elements.moreConBtn).click();
                current = await driver.findElement(selector).getAttribute("aria-valuenow");
            }
        }else {
            var click = (parseInt(current,10)-parseInt(kWh,10))/50 +1;
            for (i = 0; i < click; i++) {
                await driver.findElement(page.stromProdukte.elements.lessConBtn).click();
                current = await driver.findElement(selector).getAttribute("aria-valuenow");
            }
        }
        return await driver.findElement(selector).getAttribute("aria-valuenow");
    },

    submitCalculator: async function(){
        return await driver.findElement(page.stromProdukte.elements.submitCalculatorBtn).click();
    },

    submitForm:async function(){
      return await  driver.findElement(page.stromProdukte.elements.submitFormBtn).click();
    },

    setPeronalData: async function(salutation, name, lastname){
        var selector = page.stromProdukte.elements.salutationDropDown;
        await driver.wait(until.elementsLocated(selector), 5000);
        await driver.findElement(selector).click();

        if(salutation =="Herr"){
            await driver.findElement(page.stromProdukte.elements.selectHerr).click();
        }else if(salutation =="Frau"){
            await driver.findElement(page.stromProdukte.elements.selectFrau).click();
        }

        await driver.findElement(page.stromProdukte.elements.surnameInsert).sendKeys(name);
        return await driver.findElement(page.stromProdukte.elements.lastnameInsert).sendKeys(lastname);
    },
    setAdressData: async function(street, nr, city){
        await driver.findElement(page.stromProdukte.elements.streetInsert).sendKeys(street);
        await driver.findElement(page.stromProdukte.elements.nrInsert).sendKeys(nr);
        return await driver.findElement(page.stromProdukte.elements.cityInsert).sendKeys(city);
    },
    setContactData: async function(mail, tel){
        await driver.findElement(page.stromProdukte.elements.emailInsert).sendKeys(mail);
        return await driver.findElement(page.stromProdukte.elements.telInsert).sendKeys(tel);
    },













    //CHECKS

    checkDefaultConsumption: async function(expected_consumption){
        var selector = page.stromProdukte.elements.defConsumption;
        await driver.wait(until.elementsLocated(selector), 5000);
        var defaultConsumption = await driver.findElement(selector).getAttribute("aria-valuenow");
        expect(defaultConsumption).to.equal(expected_consumption);
    },
    checkIfProductPriceIncresed: async function(){
        var basisPrice= shared.testData.sonnenstromBasisPrice;
        var newPrice = await driver.findElement(page.stromProdukte.elements.priceFirstProduct).getText();
        expect(basisPrice).to.be.below(newPrice);
    },

    checkIfProductPriceDecresed: async function(){
        var basisPrice= await shared.testData.sonnenstromBasisPrice;
        var newPrice = await driver.findElement(page.stromProdukte.elements.priceFirstProduct).getText();
        expect(basisPrice).to.be.above(newPrice);
    },
    checkFormSummary: async function(product, salutation, lastname, plz, city){
        var prod = await driver.findElement(page.stromProdukte.elements.productSummary).getText();
        var name = await driver.findElement(page.stromProdukte.elements.nameSummary).getText();
        var ci = await driver.findElement(page.stromProdukte.elements.plzCitySummary).getText();
        expect(product).to.equal(prod);
        expect(salutation + " "+lastname).to.equal(name);
        expect(plz+" "+city).to.equal(ci);
    }

};
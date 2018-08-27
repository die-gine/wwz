module.exports = {

    url: 'https://www.wwz.ch/uebersicht',

    elements: {
        //main menu
        meinWWZ: by.css(shared.testData.meinWWZ),
        loginDropdown: by.css(shared.testData.loginDropdown),

        //page elements
        title : by.css("h1#wwz-content-title"),
        closeLoginDropdown : by.css("img.login-dropdown-close"),
        customerNr : by.css("div.columns:nth-child(2) > label.ng-binding"),
        refPosition: by.css("div.just-one-location span > span.loc_entry_second"),
        contractAccountDropdown: by.xpath("//div[3]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]"),
        dropdownList: by.css("ul.nli-dropdown-list:nth-child(2) > li"),
        firstInvoice: by.css("div.row.partial-overlay-container.invoice-row-style.ng-scope:nth-child(2)"),
        invoiceBtn: by.css("input[value='Zu meinen Rechnungen']")
    },

    selectContractAccountByNr: async function(contractAccountNr){
        var selector = page.meineUebersicht.elements.contractAccountDropdown;
        //open dropdown
        await driver.wait(until.elementLocated(selector), 20000);
        var element = await driver.findElement(selector);
        await driver.wait(until.elementIsEnabled(element), 10000);
        await driver.manage().timeouts().implicitlyWait(20000);
        await element.click();
        var list = await driver.findElements(page.meineUebersicht.elements.dropdownList);

        //select account by nr
        for (var i = 0; i < list.length; i++) {
            var result= await list[i].getText();
            if(result.replace(/[^0-9]+/g, "") == contractAccountNr){
                await list[i].click();
            }
        }
    },
    goToInvoiceOverview: async function(){
        var selector = page.meineUebersicht.elements.invoiceBtn;
        await driver.wait(until.elementsLocated(selector), 5000);
        return await driver.findElement(selector).click();
    },










    //CHECK

    checkTitle: async function(expt_title){
        var selector = page.meineUebersicht.elements.title;
        await driver.wait(until.elementsLocated(selector), 5000);
        var shownTitle = await driver.findElement(page.meineUebersicht.elements.title).getText();
        shownTitle = await shownTitle.toLowerCase();
        expt_title = await expt_title.toLowerCase();
        expect(shownTitle.replace("­","")).to.equal(expt_title);
    },
    checkKundennummer: async function(nr){
        driver.findElement(page.meineUebersicht.elements.loginDropdown);
        var shownNr = await driver.findElement(page.meineUebersicht.elements.customerNr).getText();
        expect (shownNr.replace("Kundenummer: ","")).to.equal(nr);

    },
    checkReferenceLocation: async function(location){
        var selector = page.meineUebersicht.elements.refPosition;
        await driver.wait(until.elementsLocated(selector), 5000);
        var shownLocation = await driver.findElement(selector).getText();
        expect (shownLocation).to.equal(location);
    },
    checkInvoiceByDate: async function(invDate){
        var selector = page.meineUebersicht.elements.firstInvoice;
        var shownInvoice = await driver.findElement(selector).getText();
        return await expect(shownInvoice).to.contain(invDate);
    },



};
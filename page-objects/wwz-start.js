module.exports = {

    url: 'https://www.wwz.ch/',

    elements: {
        //main menu
        meinWWZ: by.css(shared.testData.meinWWZ),
        loginDropdown: by.css(shared.testData.loginDropdown),
        body: by.css("body"),
        produkteBtn : by.css("li.menu-navigation-element.wwz-blue:nth-child(1) a.wwz-navigation-arrow > span.wwz-hover"),
        stromBtn : by.css("ul.sub-menu.wwz-blue.open.f-open-dropdown li:nth-child(1) a.wwz-hover > div:nth-child(2)"),
        //login elements
        emailInput: by.css("input[name='email']"),
        pwdInput: by.css("input[name='password']"),
        loginBtn: by.css("input[value='einloggen']"),
        logoutBtn: by.css("div.wwz-logout.wwz-form > button.wwz-button"),
        //page elements
        title: by.css ("body.contentPage:nth-child(1) div.wwz-nav-container.wwz-print-hide nav.top-bar.wwz-print-hide:nth-child(2) section.top-bar-section ul.right.show-for-medium-up li.login-dropdown.wwz-menu.ng-scope ul.wwz-menu-content.f-dropdown.medium.open.f-open-dropdown.authenticated li.wwz-element.wwz-directive-component:nth-child(2) div.clearfix.ng-isolate-scope div.ng-scope div.row.text-left.dropdown-customer-info.no-margin-bottom:nth-child(1) div.columns:nth-child(1) > label:nth-child(1)"),
        titleLogout: by.css ("#wwz-content-title"),

    },

    open: async function(){
        await helpers.loadPage('https://www.wwz.ch');
    },

    navigateToStrom: async function () {
        await driver.findElement(page.wwzStart.elements.produkteBtn).click();
        return await driver.findElement(page.wwzStart.elements.stromBtn).click();
    },

    login: async function(username, pwd){
        await driver.wait(until.elementsLocated(page.wwzStart.elements.meinWWZ), 10000);
        await driver.findElement(page.wwzStart.elements.meinWWZ).click();
        await driver.findElement(page.wwzStart.elements.emailInput).sendKeys(username);
        await driver.findElement(page.wwzStart.elements.pwdInput).sendKeys(pwd);
        await driver.findElement(page.wwzStart.elements.loginBtn).click();
        return await driver.wait(until.elementsLocated(page.wwzStart.elements.title), 10000);
    },

    logout: async function(){

        var element = driver.findElement(page.wwzStart.elements.loginDropdown);

        if(element.isDisplayed() == false){
            await driver.findElement(page.wwzStart.elements.meinWWZ).click();
        }
        await driver.findElement(page.wwzStart.elements.logoutBtn).click();
        return await driver.wait(until.elementsLocated(page.wwzStart.elements.titleLogout), 10000);
    }

};
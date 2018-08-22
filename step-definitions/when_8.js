module.exports = function () {

    this.When(/^ich mich anmelde \- "([^"]*)", "([^"]*)"$/, async function (username, pwd) {
        return await page.wwzStart.login(username,pwd);
    });

    this.When(/^ich mich abmelde$/, async function () {
        return await page.wwzStart.logout();
    });


};

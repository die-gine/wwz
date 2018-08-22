module.exports = function () {

    this.Given(/^ist die WWZ Startseite$/,async function () {
        return await page.wwzStart.open('https://www.wwz.ch');
    });

};

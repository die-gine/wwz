module.exports = function () {

    this.Given(/^ist die WWZ Startseite$/,async function () {
        return await helpers.loadPage('https://www.wwz.ch');
    });

};

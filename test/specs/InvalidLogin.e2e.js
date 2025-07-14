const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')

describe('Login Feature', () => {
    it('you should receive an error message with an invalid login', async () => {
        await HomePage.clickLoginMenu();
        await LoginPage.doTheLogin('ccc', 'ddd');
        await LoginPage.submitLogin();
        await LoginPage.validatErroMessage();
    });
});
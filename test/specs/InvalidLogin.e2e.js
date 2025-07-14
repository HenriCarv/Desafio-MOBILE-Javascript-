import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page'
import HomePage from '../pageobjects/home.page'

describe('Login Feature', () => {
    it('you should receive an error message with an invalid login', async () => {
        await HomePage.clickLoginMenu();
        await LoginPage.doTheLogin('ccc', 'ddd');
        await LoginPage.submitLogin();
        await LoginPage.validatErroMessage();
    });
});
import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page'
import HomePage from '../pageobjects/home.page'

describe('Login Feature', () => {
    it('you should receive an error message with an invalid login Password', async () => {
        await HomePage.clickLoginMenu();
        await LoginPage.doTheLogin('ccc@email.com', '');
        await LoginPage.submitLogin();
        await LoginPage.validatTheErroMessagePassword();
    });

    it('you should receive an error message with an invalid login Email', async () => {
        await HomePage.clickLoginMenu();
        await LoginPage.doTheLogin('', '0000');
        await LoginPage.submitLogin();
        await LoginPage.validatTheErroMessageEmail();
    });
});
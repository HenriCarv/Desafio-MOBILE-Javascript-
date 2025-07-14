import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';

describe('Login Feature', () => {
    it('should login with valid credentials', async () => {
        await HomePage.clickLoginMenu();
        await LoginPage.doTheLogin('tomsmith@email.com', 'SuperSecretPassword!');
        await LoginPage.submitLogin();
        await LoginPage.validatTheLogin();
    });
});
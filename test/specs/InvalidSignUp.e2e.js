import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';
import { faker } from '@faker-js/faker';

describe('Login Feature', () => {
    let email, password;

    before(() => {
        email = faker.internet.email();
        password = faker.internet.password(12, true, /[A-Za-z0-9]/);
    });

    it('must create a user with no Email', async () => {
        await HomePage.clickLoginMenu();
        await LoginPage.createUser("", password);
        await LoginPage.validatTheErroEmail();
    });

    it('must create a user with no Password', async () => {
        await HomePage.clickLoginMenu();
        await LoginPage.createUser(email, "");
        await LoginPage.validatTheErroPassword();
    });

    it('must create a user with no Repeat Password', async () => {
        await HomePage.clickLoginMenu();
        await LoginPage.createUser(email, "");
        await LoginPage.validatTheErroRepeatPassword();
    });
});
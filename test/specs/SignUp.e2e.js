import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';
import { faker } from '@faker-js/faker';

describe('Login Feature', () => {
    let email, password;

    before(() => {
        email = faker.internet.email();
        // senha com 12 caracteres, só letras e números, sem memorable para respeitar o padrão
        password = faker.internet.password(12, false, /[A-Za-z0-9]/);
    });

    it('must create a new user and login', async () => {
        await HomePage.clickLoginMenu();
        await LoginPage.createUser(email, password);
        await LoginPage.validatTheSingUp();

        await LoginPage.changeToLogin();
        await LoginPage.submitLogin(email, password);
        await LoginPage.validatTheLogin();
    });
});

import { expect } from '@wdio/globals';
import FormPage from '../pageobjects/Form.page'
import HomePage from '../pageobjects/home.page'

describe('Form Feature', () => {
    it('Go Through The Screens', async () => {
        await HomePage.clickFormsMenu();
        await FormPage.fillTheField();
        await FormPage.switchTheToggle();
        await FormPage.validatSwitchToggle();
        await FormPage.clickAndSwitchOptions();
        await FormPage.clickButtonInactive();
        await FormPage.clickButtonActive();
    });
});
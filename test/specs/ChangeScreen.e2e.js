import { expect } from '@wdio/globals';
import HomePage from '../pageobjects/home.page'

describe('Menu Feature', () => {
    it('Go Through The Screens', async () => {
        await HomePage.clickLoginMenu();
        await HomePage.clickWebviewMenu();
        await HomePage.clickFormsMenu();
        await HomePage.clickSwipeMenu();
        await HomePage.clickDragMenu();
        await HomePage.clickHomeMenu();
    });
});
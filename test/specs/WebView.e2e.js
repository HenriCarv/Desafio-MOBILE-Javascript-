import { expect } from '@wdio/globals';
import Webview from '../pageobjects/webview.page'
import HomePage from '../pageobjects/home.page'

describe('Webview Feature', () => {
    it('Go To WebView', async () => {
        await HomePage.clickWebviewMenu();
        await Webview.clickWebViewMenuInternal();
        await Webview.clickDocsMenu();
        await Webview.validatTitle();
    });
});
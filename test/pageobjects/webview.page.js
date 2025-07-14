import Page from './page.js'
import allure from '@wdio/allure-reporter';

class HomePage extends Page {
    get buttonMenuToggle () { return $('~Toggle navigation bar') }
    get buttonDocsMenu () { return $('android=new UiSelector().text("Docs")') }
    get textDocsTitle () { return $('android=new UiSelector().text("Getting Started")') }

    async clickWebViewMenuInternal () {
        allure.addStep('Click on Webview Menu Internal');
        await this.buttonMenuToggle.click();
        await browser.takeScreenshot();
    }

    async clickDocsMenu () {
        allure.addStep('Click Docs Menu');
        await this.buttonDocsMenu.click();
        await browser.takeScreenshot();
    }

    async validatTitle () {
        allure.addStep('Validat Title');
        await this.textDocsTitle.waitForDisplayed({ timeout: 5000 });
        const text = await this.textDocsTitle.getText();
        allure.addStep(`Validate Title: ${text}`);
        console.log('Title:', text);
        await expect(this.textDocsTitle).toHaveText('Getting Started');
        await browser.takeScreenshot();
    }

}

export default new HomePage();
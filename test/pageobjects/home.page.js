import Page from './page.js'
import allure from '@wdio/allure-reporter';

class HomePage extends Page {
    get buttonMenuLogin () { return $('~Login') }
    get buttonMenuWebview () { return $('~Webview') }
    get buttonMenuForms () { return $('~Forms') }
    get buttonMenuSwipe () { return $('~Swipe') }
    get buttonMenuDrag () { return $('~Drag') }
    get buttonMenuHome () { return $('~Home') }

    async clickLoginMenu () {
        allure.addStep('Click on Login Menu');
        await this.buttonMenuLogin.click();
        await browser.takeScreenshot();
    }

    async clickWebviewMenu () {
        allure.addStep('Click on Webview Menu');
        await this.buttonMenuWebview.click();
        await browser.takeScreenshot();
    }

    async clickFormsMenu () {
        allure.addStep('Click on Forms Menu');
        await this.buttonMenuForms.click();
        await browser.takeScreenshot();
    }

    async clickSwipeMenu () {
        allure.addStep('Click on Swipe Menu');
        await this.buttonMenuSwipe.click();
        await browser.takeScreenshot();
    }

    async clickDragMenu () {
        allure.addStep('Click on Drag Menu');
        await this.buttonMenuDrag.click();
        await browser.takeScreenshot();
    }

    async clickHomeMenu () {
        allure.addStep('Click on Home Menu');
        await this.buttonMenuHome.click();
        await browser.takeScreenshot();
    }

}

export default new HomePage();
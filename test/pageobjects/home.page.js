import Page from './page.js'
import allure from '@wdio/allure-reporter';
import { takeScreenshotAndAddToReport }  from '../utils/screenshotHelper'

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
        await takeScreenshotAndAddToReport('Click on Login Menu');
    }

    async clickWebviewMenu () {
        allure.addStep('Click on Webview Menu');
        await this.buttonMenuWebview.click();
        await takeScreenshotAndAddToReport('Click on Webview Menu');
    }

    async clickFormsMenu () {
        allure.addStep('Click on Forms Menu');
        await this.buttonMenuForms.click();
        await takeScreenshotAndAddToReport('Click on Forms Menu');
    }

    async clickSwipeMenu () {
        allure.addStep('Click on Swipe Menu');
        await this.buttonMenuSwipe.click();
        await takeScreenshotAndAddToReport('Click on Swipe Menu');
    }

    async clickDragMenu () {
        allure.addStep('Click on Drag Menu');
        await this.buttonMenuDrag.click();
        await takeScreenshotAndAddToReport('Click on Drag Menu');
    }

    async clickHomeMenu () {
        allure.addStep('Click on Home Menu');
        await this.buttonMenuHome.click();
        await takeScreenshotAndAddToReport('Click on Home Menu');
    }

}

export default new HomePage();
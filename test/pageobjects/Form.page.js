import Page from './page.js';
import allure from '@wdio/allure-reporter';
import { takeScreenshotAndAddToReport }  from '../utils/screenshotHelper'

class FormPage extends Page {
    get inputField () { return $('~text-input') }
    get toggleSwitch () { return $('~switch') }
    get labelSwitch () { return $('android=new UiSelector().text("Click to turn the switch OFF")') }
    get dropDownItem () { return $('android=new UiSelector().text("󰅀")') }
    get dropDownWebDriver () { return $('android=new UiSelector().text("webdriver.io is awesome")') }
    get dropDownAppium () { return $('android=new UiSelector().text("Appium is awesome")') }
    get dropDownThisApp () { return $('android=new UiSelector().text("This app is awesome")') }
    get dropDownSelect () { return $('android=new UiSelector().text("Select an item...")') }
    get buttonInactive () { return $('android=new UiSelector().className("android.view.ViewGroup").instance(19)') }
    get buttonActive () { return $('android=new UiSelector().className("android.view.ViewGroup").instance(17)') }
    get buttonMessage () { return $('id=android:id/message') }
    get buttonMessageOk () { return $('id=android:id/button1') }

    async fillTheField () {
        allure.addStep('Fill The Field');
        await this.inputField.setValue("Teste App");
        await takeScreenshotAndAddToReport('Fill The Field');
    }

    async switchTheToggle () {
        allure.addStep('Switch The Toggle');
        await this.toggleSwitch.click();
        await takeScreenshotAndAddToReport('Switch The Toggle');
    }

    async validatSwitchToggle () {
        allure.addStep('Wait for Switch Toggle message');
        await this.labelSwitch.waitForDisplayed({ timeout: 5000 });
        const text = await this.labelSwitch.getText();
        allure.addStep(`Validate Switch Toggle message: ${text}`);
        console.log('Switch Toggle message:', text);
        await expect(this.labelSwitch).toHaveText('Click to turn the switch OFF');
        await takeScreenshotAndAddToReport('Switch The Toggle');
    }

    async clickAndSwitchOptions () {
        allure.addStep('Click And Switch Options');
        await this.dropDownItem.click();
        await takeScreenshotAndAddToReport('Click And Switch Options');

        allure.addStep('Click webdriver.io is awesome');
        await this.dropDownWebDriver.click();
        await takeScreenshotAndAddToReport('Click webdriver.io is awesome');

        allure.addStep('Click And Switch Options');
        await this.dropDownItem.click();
        await takeScreenshotAndAddToReport('Click And Switch Options');

        allure.addStep('Click Appium is awesome');
        await this.dropDownAppium.click();
        await takeScreenshotAndAddToReport('Click Appium is awesome');

        allure.addStep('Click And Switch Options');
        await this.dropDownItem.click();
        await takeScreenshotAndAddToReport('Click And Switch Options');

        allure.addStep('Click Select an item...');
        await this.dropDownSelect.click();
        await takeScreenshotAndAddToReport('Click Select an item...');

        allure.addStep('Click And Switch Options');
        await this.dropDownItem.click();
        await takeScreenshotAndAddToReport('Click And Switch Options');

        allure.addStep('Click This app is awesome');
        await this.dropDownThisApp.click();
        await takeScreenshotAndAddToReport('Click This app is awesome');
    }

    async clickButtonInactive () {
        allure.addStep('Click Button Inactive');
        await this.buttonInactive.click();
        await takeScreenshotAndAddToReport('Click Button Inactive');
    }

    async clickButtonActive () {
        allure.addStep('Click Button Active');
        await this.buttonActive.click();
        await takeScreenshotAndAddToReport('Click Button Active');

        allure.addStep('Wait for Active message');
        await this.buttonMessage.waitForDisplayed({ timeout: 5000 });
        const text = await this.buttonMessage.getText();
        allure.addStep(`Validate Active message: ${text}`);
        console.log('Active message:', text);
        await expect(this.buttonMessage).toHaveText('This button is active');
        await takeScreenshotAndAddToReport('Active message');

        allure.addStep('Click Button Active Ok');
        await this.buttonMessageOk.click();
        await takeScreenshotAndAddToReport('Click Button Active Ok');
    }
}

export default new FormPage();
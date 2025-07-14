import Page from './page.js';
import allure from '@wdio/allure-reporter';

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
        await browser.takeScreenshot();
    }

    async switchTheToggle () {
        allure.addStep('Switch The Toggle');
        await this.toggleSwitch.click();
        await browser.takeScreenshot();
    }

    async validatSwitchToggle () {
        allure.addStep('Wait for Switch Toggle message');
        await this.labelSwitch.waitForDisplayed({ timeout: 5000 });
        const text = await this.labelSwitch.getText();
        allure.addStep(`Validate Switch Toggle message: ${text}`);
        console.log('Switch Toggle message:', text);
        await expect(this.labelSwitch).toHaveText('Click to turn the switch OFF');
        await browser.takeScreenshot();
    }

    async clickAndSwitchOptions () {
        allure.addStep('Click And Switch Options');
        await this.dropDownItem.click();
        await browser.takeScreenshot();

        allure.addStep('Click webdriver.io is awesome');
        await this.dropDownWebDriver.click();
        await browser.takeScreenshot();

        allure.addStep('Click And Switch Options');
        await this.dropDownItem.click();
        await browser.takeScreenshot();

        allure.addStep('Click Appium is awesome');
        await this.dropDownAppium.click();
        await browser.takeScreenshot();

        allure.addStep('Click And Switch Options');
        await this.dropDownItem.click();
        await browser.takeScreenshot();

        allure.addStep('Click Select an item...');
        await this.dropDownSelect.click();
        await browser.takeScreenshot();

        allure.addStep('Click And Switch Options');
        await this.dropDownItem.click();
        await browser.takeScreenshot();

        allure.addStep('Click This app is awesome');
        await this.dropDownThisApp.click();
        await browser.takeScreenshot();
    }

    async clickButtonInactive () {
        allure.addStep('Click Button Inactive');
        await this.buttonInactive.click();
        await browser.takeScreenshot();
    }

    async clickButtonActive () {
        allure.addStep('Click Button Active');
        await this.buttonActive.click();
        await browser.takeScreenshot();

        allure.addStep('Wait for Active message');
        await this.buttonMessage.waitForDisplayed({ timeout: 5000 });
        const text = await this.buttonMessage.getText();
        allure.addStep(`Validate Active message: ${text}`);
        console.log('Active message:', text);
        await expect(this.buttonMessage).toHaveText('This button is active');
        await browser.takeScreenshot();

        allure.addStep('Click Button Active Ok');
        await this.buttonMessageOk.click();
        await browser.takeScreenshot();
    }
}

export default new FormPage();
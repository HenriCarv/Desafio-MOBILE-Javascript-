import Page from './page.js';
import allure from '@wdio/allure-reporter';
import { takeScreenshotAndAddToReport }  from '../utils/screenshotHelper'

class LoginPage extends Page {
    get inputUsername () { return $('~input-email') }
    get inputPassword () { return $('~input-password') }
    get inputRepeatPassword () { return $('~input-repeat-password') }
    get buttonSubmit () { return $('android=new UiSelector().className("android.view.ViewGroup").instance(16)') }
    get buttonSubmitSingUp () { return $('android=new UiSelector().className("android.view.ViewGroup").instance(17)') }
    get buttonLogin () { return $('android=new UiSelector().text("Login")') }
    get popMessage () { return $('id=android:id/message') }
    get textErroMessageEmail () { return $('android=new UiSelector().text("Please enter a valid email address")') }
    get textErroMessagePassword () { return $('android=new UiSelector().text("Please enter at least 8 characters")') }
    get buttonSignUp () { return $('android=new UiSelector().text("Sign up")') }
    get buttonOkMessage () { return $('id=android:id/button1') }
    get buttonEmailErrorMessage () { return $('android=new UiSelector().text("Please enter a valid email address")') }
    get buttonPasswordErrorMessage () { return $('android=new UiSelector().text("Please enter at least 8 characters")') }
    get buttonRepeatPasswordErrorMessage () { return $('android=new UiSelector().text("Please enter the same password")') }

    async doTheLogin (username, password) {
        allure.addStep('Enter username');
        await this.inputUsername.setValue(username);
        await takeScreenshotAndAddToReport('Entered username');

        allure.addStep('Enter password');
        await this.inputPassword.setValue(password);
        await takeScreenshotAndAddToReport('Entered password');
    }

    async submitLogin () {
    allure.addStep('Click submit button');
        await this.buttonSubmit.click();
        await takeScreenshotAndAddToReport('Clicked submit button');
    }

    async createUser (username, password) {
        allure.addStep('Click SignUp');
        await this.buttonSignUp.click();
        await takeScreenshotAndAddToReport('Click SignUp');

        allure.addStep('Enter username');
        await this.inputUsername.setValue(username);
        await takeScreenshotAndAddToReport('Enter username');

        allure.addStep('Enter password');
        await this.inputPassword.setValue(password);
        await takeScreenshotAndAddToReport('Enter password');

        allure.addStep('Repeat password');
        await this.inputRepeatPassword.setValue(password);
        await takeScreenshotAndAddToReport('Repeat password');

        allure.addStep('Click submit button');
        await this.buttonSubmitSingUp.click();
        await takeScreenshotAndAddToReport('Click submit button');
    }

    async changeToLogin () {
        allure.addStep('Click Login');
        await this.buttonLogin.click();
        await takeScreenshotAndAddToReport('Click Login');
    }

    async validatTheLogin () {
        allure.addStep('Wait for login message');
        await this.popMessage.waitForDisplayed({ timeout: 5000 });
        const text = await this.popMessage.getText();
        allure.addStep(`Validate login message: ${text}`);
        console.log('Login message:', text);
        await expect(this.popMessage).toHaveText('You are logged in!');
        await takeScreenshotAndAddToReport('Validate login message');
    }

    async validatTheSingUp () {
        allure.addStep('Wait for SignUp message');
        await this.popMessage.waitForDisplayed({ timeout: 5000 });
        const text = await this.popMessage.getText();
        allure.addStep(`Validate login message: ${text}`);
        console.log('SignUp message:', text);
        await expect(this.popMessage).toHaveText('You successfully signed up!');
        await takeScreenshotAndAddToReport('Validate SignUp message');
        allure.addStep('Click ok Message');
        await this.buttonOkMessage.click();
        await takeScreenshotAndAddToReport('Click ok Message');
    }

    async validatTheErroEmail () {
        allure.addStep('Wait for email Error message');
        await this.buttonEmailErrorMessage.waitForDisplayed({ timeout: 5000 });
        const text = await this.buttonEmailErrorMessage.getText();
        allure.addStep(`Validate email Error message: ${text}`);
        console.log('email Error message:', text);
        await expect(this.buttonEmailErrorMessage).toHaveText('Please enter a valid email address');
        await takeScreenshotAndAddToReport('email Error message:');
    }

    async validatTheErroPassword () {
        allure.addStep('Wait for Password  Error message');
        await this.buttonPasswordErrorMessage.waitForDisplayed({ timeout: 5000 });
        const text = await this.buttonPasswordErrorMessage.getText();
        allure.addStep(`Validate Password  Error message: ${text}`);
        console.log('Password  Error message:', text);
        await expect(this.buttonPasswordErrorMessage).toHaveText('Please enter at least 8 characters');
        await takeScreenshotAndAddToReport('Password Error message:');
    }

    async validatTheErroRepeatPassword () {
        allure.addStep('Wait for Repeat Password  Error message');
        await this.buttonRepeatPasswordErrorMessage.waitForDisplayed({ timeout: 5000 });
        const text = await this.buttonRepeatPasswordErrorMessage.getText();
        allure.addStep(`Validate Repeat Password  Error message: ${text}`);
        console.log('Repeat Password  Error message:', text);
        await expect(this.buttonRepeatPasswordErrorMessage).toHaveText('Please enter the same password');
        await takeScreenshotAndAddToReport('Repeat Password Error message:');
    }

    async validatTheErroMessageEmail () {
        allure.addStep('Wait for Erro Email message');
        await this.textErroMessageEmail.waitForDisplayed({ timeout: 5000 });
        const text = await this.textErroMessageEmail.getText();
        allure.addStep(`Validate Erro Email message: ${text}`);
        console.log('Erro Email message:', text);
        await expect(this.textErroMessageEmail).toHaveText('Please enter a valid email address');
        await takeScreenshotAndAddToReport('Validate Erro Email message');
    }

    async validatTheErroMessagePassword() {
        allure.addStep('Wait for Erro password message');
        await this.textErroMessagePassword.waitForDisplayed({ timeout: 5000 });
        const text = await this.textErroMessagePassword.getText();
        allure.addStep(`Validate Erro password message: ${text}`);
        console.log('Erro password message:', text);
        await expect(this.textErroMessagePassword).toHaveText('Please enter at least 8 characters');
        await takeScreenshotAndAddToReport('Validate Erro password message');
    }
}

export default new LoginPage();

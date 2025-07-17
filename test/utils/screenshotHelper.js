import allure from '@wdio/allure-reporter';

export async function takeScreenshotAndAddToReport(stepName) {
  const screenshot = await browser.takeScreenshot();
  allure.addAttachment(stepName, Buffer.from(screenshot, 'base64'), 'image/png');
}

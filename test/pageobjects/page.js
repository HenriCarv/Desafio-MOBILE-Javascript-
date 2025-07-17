import { browser } from '@wdio/globals';
import { takeScreenshotAndAddToReport } from '../utils/screenshotHelper.js';

export default class Page {
  async open(path) {
    await browser.url(`https://the-internet.herokuapp.com/${path}`);
    await takeScreenshotAndAddToReport(`Abrindo path: ${path}`);
  }
}

const { config } = require('../wdio.conf.cjs')
const path = require('path');
const allure = require('allure-commandline');

exports.config = {
    ...config,
    specs: [
        path.join(__dirname, '..', 'test', 'specs', '**', '*.js')
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'iOS',
        'appium:deviceName': 'iPhone 12',
        'appium:platformVersion': '14.5',
        'appium:automationName': 'XCUITest',
        'appium:app': path.resolve(__dirname, '../path/to/your/ios/app.app'),
    }],
    services: ['appium'],
    port: 4723,

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
            addConsoleLogs: true,
            screenshotOnReject: true,
        }]
    ],

    afterStep: async function (step, scenario, { error, duration, passed }) {
        if (error) {
            await browser.takeScreenshot();
        }
    },

    onComplete: function () {
        console.log('📊 Gerando relatório Allure...');
        const generation = allure(['generate', 'allure-results', '--clean']);
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(() => reject(new Error('❌ Falha ao gerar o relatório Allure')), 5000);
            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout);
                if (exitCode !== 0) return reject(new Error('❌ Falha ao gerar o relatório Allure'));
                console.log('✅ Relatório Allure gerado com sucesso!');
                resolve();
            });
        });
    }
};
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
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.resolve(__dirname, '..', 'android.wdio.native.app.v1.0.8.apk'),
        'appium:noReset': false,
        'appium:fullReset': true
    }],

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    },

    waitforTimeout: 15000,

    onPrepare: function () {
        console.log('🔧 Preparando ambiente de testes Android...');
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

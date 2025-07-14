exports.config = {
    runner: 'local',
    framework: 'mocha',
    services: ['appium'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};

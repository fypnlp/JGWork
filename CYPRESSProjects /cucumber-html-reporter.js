const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/cucumber-json',
	reportPath: './reports/Cucumber-htmlreports.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '60'
        },
        device: 'Local test machine',
        platform: {
            name: 'mas os',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Custom project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Jan 7th 2021, 10:48 AM GMT'},
            {label: 'Execution End Time', value: 'Jan 7th 2021, 10:50 AM GMT'}
        ]
    }
});
const volecity = require('velocityjs');
const fs = require('fs');
const reportEmailTemplate = fs.readFileSync(`${__dirname}/report-tempalte.vm`, 'utf8');

class reportGenerateService {
    static generateHtml(context) {
        const context = {
            sourceData,
        };
        return Velocity.render(reportEmailTemplate, context);
    }
}

exports.reportGenerateService = reportGenerateService;
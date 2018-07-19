const volecity = require('velocityjs');
const fs = require('fs');
const reportEmailTemplate = fs.readFileSync(`${__dirname}/report-tempalte.vm`, 'utf8');

class reportGenerateService {
    static generateHtml(sourceData) {
        const context = {
            content,
        };
        return Velocity.render(reportEmailTemplate, context);
    }
}

exports.reportGenerateService = reportGenerateService;
var html5pdf = require("html5-to-pdf");
var resumeToHtml = require('resume-to-html');
var fs = require('fs');

function resumeToPDF(resumeData, fileName, callback) {

    resumeToHtml(resumeData, {}, function(htmlResume) {

        fs.writeFileSync('resume.html', htmlResume, 'utf8');
        html5pdf().from('resume.html').to(process.cwd() + '/' + fileName, function() {

            callback(true);
        })
    });
}

module.exports = resumeToPDF;
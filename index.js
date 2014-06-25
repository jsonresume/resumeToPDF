var fs = require('fs');
var pdf = require('html-pdf');
var resumeToHtml = require('resume-to-html');

function resumeToPDF(resumeJson, callback) {
    resumeToHtml(resumeJson, function(htmlResume) {
        pdf.create(htmlResume, {
            width: '50mm',
            height: '90mm'
        }, function(err, buffer) {
            callback(err, buffer);
        });

    });
};

module.exports = resumeToPDF;
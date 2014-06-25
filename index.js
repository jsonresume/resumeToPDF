var fs = require('fs');
var pdf = require('html-pdf');
var resumeToHtml = require('resume-to-html');

function resumeToPDF(resumeJson, callback) {
    resumeToHtml(resumeJson, function(htmlResume) {
        pdf.create(htmlResume, {
            // A4 size? what is that?
            width: '297mm',
            height: '400mm'
        }, function(err, buffer) {
            callback(err, buffer);
        });

    });
};

module.exports = resumeToPDF;
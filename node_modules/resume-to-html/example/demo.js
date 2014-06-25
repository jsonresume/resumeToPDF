var resumeToHTML = require('..');
var fs = require('fs');
var path = require('path');

var resumeObject = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'resume.json'), 'utf8'));


resumeToHTML(resumeObject, function (html, errs) {
	console.log(html,errs);
});
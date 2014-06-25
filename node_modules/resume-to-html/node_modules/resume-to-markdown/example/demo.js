var resumeToMarkdown = require('..');
var fs = require('fs');
var path = require('path');
var marked = require('marked');
var resumeObject = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'resume.json'), 'utf8'));
var htmlToText = require('html-to-text');



resumeToMarkdown(resumeObject, function (markdown, errs) {
	console.log(marked(markdown),errs);
	var text = htmlToText.fromString(marked(markdown), {
			wordwrap: 130
	});
	fs.writeFileSync('blue.txt', text, 'utf8');
	fs.writeFileSync('blue.md', markdown, 'utf8');
	fs.writeFileSync('blue.html', marked(markdown), 'utf8');
});

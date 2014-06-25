var fs = require('fs');
var Mustache = require('mustache');
var path = require('path');
var resumeSchema = require('resume-schema');
var resumeToMarkdown = require('resume-to-markdown');
var marked = require('marked');


function resumeToHTML(resumeObject, callback) {
	resumeToMarkdown(resumeObject, function(markdown, errs){
		if(!errs) {
			var html = marked(markdown);
			callback(html, null);
		} else {
			callback(null, errs);
		}
	});
	/*resumeSchema.validate(resumeObject, function (report, errs){
		if(!errs) {		

	    var resumeTXT = Mustache.render(resumeTemplate, resumeObject);
	    callback(resumeTXT, null);
		} else {
			callback(null, errs)
		}
	});*/
}

module.exports = resumeToHTML;
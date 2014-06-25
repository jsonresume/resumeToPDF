var fs = require('fs');
var Mustache = require('mustache');
var path = require('path');
var resumeSchema = require('resume-schema');

var resumeTemplate = fs.readFileSync(path.resolve(__dirname, '../layout.template'), 'utf8');

function resumeToMarkdown(resumeObject, callback) {
	resumeSchema.validate(resumeObject, function (report, errs){
		if(!errs) {
	    var resumeMarkdown = Mustache.render(resumeTemplate, resumeObject);
	    callback(resumeMarkdown, null);
		} else {
			callback(null, errs)
		}
	});
}

module.exports = resumeToMarkdown;

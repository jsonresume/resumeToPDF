var test = require('tape');
var resumeToPDF = require('../');

var resumeJson = {
    "name": "test",
    "email": "test@test"
}


test('Test converter on resume.json.', function(t) {
    resumeToPDF(resumeJson, 'test.pdf', function(res) {
        t.plan(1);
        t.ok(res, 'no error');
    });
});
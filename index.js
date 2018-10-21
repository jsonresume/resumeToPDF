import {fs} from 'fs';
import {pdf} from 'html-pdf';
import {resumeToHtml} from 'resume-to-html';

export const resumeToPDF = (resumeJson, callback) => {
    // add css into html as:
    // https://github.com/marcbachmann/node-html-pdf/blob/master/test/businesscard.html
    resumeToHtml(resumeJson, {}, htmlResume => {
        pdf.create(htmlResume, {
            // A4 size? what is that?
            width: '297mm',
            height: '400mm'
        }, (err, buffer) => callback(err, buffer));
    });
};

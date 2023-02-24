var fs = require('fs');
var gulp = require('gulp');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var shelljs = require('shelljs');

function createTransport() {
    return nodemailer.createTransport(smtpTransport({
        host: 'smtp.office365.com',
        port: '587',
        tls: { ciphers: 'SSLv3' },
        service: 'hotmail',
        auth: {
            user: process.env.FROM_EMAIL_ID,
            pass: process.env.EMAIL_PASSWORD
        }
    }));
}

function getMessage() {
    return {
        from: process.env.FROM_EMAIL_ID,
        to: process.env.TO_EMAIL_ID,
        cc: process.env.TO_EMAIL_ID,
        subject: "Url validation error log",
        html: "",
        attachments: []
    };
}

gulp.task('mail', function (done) {
    shelljs.exec('gulp url-validation > url-validation-error.log');
    var message = getMessage();
    var transport = createTransport();
    html = "Hi Everyone,<br><br>Please find the attached url validation error log file."
        + "<br><br><br>Regards,<br> Bold BI Team";
    message.html = html;
    message.attachments = [{
        filename: 'url-validation-error.log',
        content: fs.readFileSync('./url-validation-error.log')
    }];

    transport.sendMail(message, function (error) {
        if (error) {
            console.log('Error occured');
            console.log(error.message);
            return;
        }
        console.log('Message sent successfully!');
        done();
    });
});

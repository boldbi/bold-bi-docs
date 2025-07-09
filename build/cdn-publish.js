var gulp = require('gulp');
var gzip = require('gulp-gzip');
var shelljs = require('shelljs');

const CONFIG = {
    accessKeyId: "AKIARWYFLOTLTQCT7S7Q",
    secretAccessKey: "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",
    AWS_REPORTS_BUCKET: "documentation.boldbi.com"
};

var s3 = require('gulp-s3-upload')(CONFIG);


var publish = function (dirName, done) {
    dirName = dirName.endsWith('/') ? dirName : dirName + '/';

    var aws = {
        Bucket: CONFIG.AWS_REPORTS_BUCKET,
        ACL: 'public-read',
        uploadNewFilesOnly: false
    };

    gulp.src(dirName + '**', { buffer: false })
        .pipe(s3(aws, {
            maxRetries: 5,
            maxRedirects: 100,
            retryDelayOptions: {
                base: 1000
            }
        }))
        .on('end', function () {
            console.log('Published in CDN');
        })
        .on('error', function (e) {
            console.error('unable to sync: ', e.stack);
            done(e);
        });
};
exports.publish = publish;

/**
 * publish into S3
 */
gulp.task('publish-docs', function (done) {
    shelljs.rm('-rf', './documentation');
    shelljs.exec(`node_modules\\.bin\\gulp production-build & node_modules\\.bin\\gulp sitemap`);
    shelljs.cp('sitemap.xml', 'public/');
    var folderPath = './public/';
    var filePath = './documentation';

    shelljs.mkdir('-p', filePath);

    gulp.src([folderPath + '/**/*'])
        // .pipe(gzip({
        //     append: false
        // }))
        .pipe(gulp.dest(filePath))
        .on('end', function () {
            publish(filePath, done);
            done();
        })
        .on('error', function (e) {
            done(e);
        });
});

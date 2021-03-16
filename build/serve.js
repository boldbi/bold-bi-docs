var gulp = require('gulp');
var shelljs = require('shelljs');

gulp.task('serve', ['build'], function () {
    shelljs.exec('gatsby develop');
});
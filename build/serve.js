var gulp = require('gulp');
var shelljs = require('shelljs');

gulp.task('gatsbydevelop', done=> {
    shelljs.exec('gatsby develop');
    done();
});

gulp.task('serve', gulp.series('build','gatsbydevelop'));
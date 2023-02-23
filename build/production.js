var gulp = require('gulp');
var shelljs = require('shelljs');
var argv = require('yargs').argv;

gulp.task('production', done => {
  let prefixFlag = argv.prefix ? '--prefix-paths': '';
  shelljs.exec(`gatsby build ${prefixFlag}`);
  done();
});

gulp.task('production-build',gulp.series('build','production'));
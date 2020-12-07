var gulp = require('gulp');
var shelljs = require('shelljs');
var argv = require('yargs').argv;

gulp.task('production-build', ['build'], function () {
  let prefixFlag = argv.prefix ? '--prefix-paths': '';
  shelljs.exec(`gatsby build ${prefixFlag}`);
});
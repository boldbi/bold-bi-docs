/*
*  filename: build.js
*  version : 3.4.41
*  Copyright Syncfusion Inc. 2001 - 2020. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws.
*/

var gulp = require('gulp');
var shelljs = require('shelljs');
var { generateToc } = require('./toc.js');
var glob = require('glob');

gulp.task('clean', function () {
    let staticFiles = glob.sync('./static/*', {
        ignore: ['./static/favicon.ico', './static/robots.txt', './static/assets', './static/404', './static/404.html']
    });
    if (staticFiles.length) shelljs.rm('-rf', staticFiles);
    shelljs.rm('-rf', ['./.cache', './public', './src/pages']);
    const leftToc = glob.sync('./left-toc.json');
    if (leftToc.length) shelljs.rm('-rf', leftToc);
});

gulp.task('copy', function () {
    shelljs.mkdir('-p', './src/pages');
    shelljs.cp('-r', './docs/*', './src/pages');
    shelljs.cp('-r', './api/*', './static');
});

gulp.task('toc', function () {
    generateToc();
});

gulp.task('postinstall', () => {
    shelljs.rm('-rf', './node_modules/gatsby/node_modules/gatsby-cli');
});

gulp.task('build', ['clean', 'copy', 'toc', 'site-variables']);
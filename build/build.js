var gulp = require('gulp');
var shelljs = require('shelljs');
var { generateToc } = require('./toc.js');
var sitevariables = require('./site-variables.js');
var glob = require('glob');

gulp.task('clean', done =>{
    let staticFiles = glob.sync('./static/*', {
        ignore: ['./static/favicon.ico', './static/robots.txt', './static/assets', './static/404', './static/404.html']
    });
    if (staticFiles.length) shelljs.rm('-rf', staticFiles);
    shelljs.rm('-rf', ['./.cache', './public', './src/pages']);
    const leftToc = glob.sync('./left-toc.json');
    if (leftToc.length) shelljs.rm('-rf', leftToc);
    done();
});

gulp.task('copy', done => {
    shelljs.mkdir('-p', './src/pages');
    shelljs.cp('-r', './docs/*', './src/pages');
    shelljs.cp('-r', './api/*', './static');
    shelljs.cp('-r', `./node_modules/gatsby-remark-extract-image-attributes/package.json`, './node_modules/gatsby-remark-extract-image-attributes/dist');
    done();
});

gulp.task('toc', done => {
    generateToc();
    done();
});

gulp.task('postinstall', done => {
    shelljs.rm('-rf', './node_modules/gatsby/node_modules/gatsby-cli');
    done();
});

gulp.task('build',gulp.series('clean', 'copy', 'toc', 'site-variables'));
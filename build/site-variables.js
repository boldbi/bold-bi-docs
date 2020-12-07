var gulp = require('gulp');
var fs = require('fs');

gulp.task('site-variables', function (done) {
    var glob = require('glob');
    const siteDetails = require('./../left-toc.json');
    var docsFileNames = glob.sync('./src/pages/**/*.*', {
        ignore: ['./src/pages/**/*.png', './src/pages/**/*.svg', './src/pages/**/*.json', './src/pages/**/*.eot', './src/pages/**/*.ttf',
            './src/pages/**/*.woff', './src/pages/**/*.gif', './src/pages/**/*.jpg', './src/pages/**/*.JPG', './src/pages/**/*.PNG', './src/pages/**/*min.js']
    });

    for (var k = 0; k < docsFileNames.length; k++) {
        if (!fs.lstatSync(docsFileNames[k]).isDirectory())
            replaceStaticVariables(docsFileNames[k], siteDetails);
    }

    var demoFileNames = glob.sync('./static/demos/**/*.*', {
        ignore: ['./static/demos/**/*.png', './static/demos/**/*.svg', './static/demos/**/*.json', './static/demos/**/*.eot', './static/demos/**/*.ttf',
            './static/demos/**/*.woff', './static/demos/**/*.gif', './static/demos/**/*.jpg', './static/demos/**/*.JPG', './static/demos/**/*.PNG']
    });

    for (var i = 0; i < demoFileNames.length; i++) {
        if (!fs.lstatSync(demoFileNames[i]).isDirectory())
            replaceStaticVariables(demoFileNames[i], siteDetails);
    }
    done();
});


function replaceStaticVariables(filePath, siteDetails) {
    var content = fs.readFileSync(filePath, 'utf8');

    content = content
        .replace(/{{site.releaseversion}}/g, siteDetails.siteVersion)
        .replace(/{{site.umsVersion}}/g, siteDetails.umsVersion);

    fs.writeFileSync(filePath, content);
}
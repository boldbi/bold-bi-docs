var gulp = require('gulp');
var shelljs = require('shelljs');
var fs = require('fs');
var gitclone=require('./git-clone.js');

gulp.task('copy-api', async function () {
    if (!fs.existsSync('./temp')) {
        fs.mkdirSync('./temp');
    }
    await new Promise((resolve) => {
        gulp.src('temp/api/docs/javascript/**/*.md')
            .pipe(gulp.dest('docs/javascript'))
            .on("end", resolve);
    });
    shelljs.rm('-rf', 'temp');
});

gulp.task('copy-api-md', gulp.series('git-clone','copy-api'));
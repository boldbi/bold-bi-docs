var gulp = require('gulp');
var markdownlint = require('markdownlint');
var glob = require('glob');
var fs = require('fs');
var shelljs = require('shelljs');
var runSequence = require('run-sequence');
var filevalidation=require('./file-validation.js');
var urlvalidation = require('./url-validation.js');
var branchName = process.env.gitlabTargetBranch;

gulp.task('md-lint', function (done) {
    var options = {
        files: glob.sync('*.md').concat(glob.sync('./docs/**/*.md')),
        config: require('./../.markdownlint.json')
    };
    markdownlint(options, function (result, err) {
        if (err && err.toString().length) {
            console.error(err.toString());
            done();
            process.exit(1);
        } else {
            console.log('\n*** Markdown Lint Succeeded ***\n');
            done();
        }
    });
});

gulp.task('typo', done => {
    // copy/paste .spelling file in .bin location
    fs.writeFileSync('./node_modules/.bin/.spelling', fs.readFileSync('./.spelling', 'utf8'));
    // goto .bin location
    shelljs.cd('./node_modules/.bin/');
    // run mdspell command
    var mdspellcmd = 'mdspell ../../docs/**/*.md ../../*.md -r -n -a -x --color --en-us';
    var output = shelljs.exec(mdspellcmd);
    // return root location
    shelljs.cd('../../');
    if (output.code !== 0) {
        process.exit(1);
    }
    done();
});

gulp.task('js-lint', function () {
    var jshint = require('gulp-jshint');
    return gulp.src(['demos/javascript/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('html-lint', function () {
    var htmllint = require('gulp-htmllint');
    return gulp.src('demos/**/*.html')
        .pipe(htmllint({ failOnError: true }));
});

gulp.task('md-file-validation',gulp.series('toc'), function () {
    let routerData = require('./../left-toc.json').routerData;
    let routerKeys = Object.keys(routerData);
    let missedFiles = [];
    routerKeys.forEach((routerPath) => {
        let data = routerData[routerPath];
        let mdPath = data.isIndexPage ? routerPath + 'index.md' : routerPath.substring(0, routerPath.length - 1) + '.md';
        if (!fs.existsSync(`docs${mdPath}`) && !data.isDemo) {
            missedFiles.push(`docs${mdPath}`);
        }
    });
    if (missedFiles.length) {
        console.log(`The following md files (${missedFiles.length}) are missing \n
${missedFiles.join('\n')}`)
    }
});

gulp.task('redirect-validation', (done) => {
    var checkInJenkins = shelljs.exec(`git diff origin/${branchName} --name-only --diff-filter=D`).stdout.split('\n').filter(Boolean);
    var isoldmdFile = skipValidation(checkInJenkins);
    if (isoldmdFile) {
        console.error('The above files are deleted.!!!')
        process.exit(1);
    }
    done();
});

function skipValidation(diff) {
    var isDeletedFile = false;
    diff.forEach(value => {
        if (value.startsWith('docs') && value.endsWith('.md') || value.startsWith('docs') && value.endsWith('.json')) {
            isDeletedFile = true;
        }
    })
    return isDeletedFile;
}

gulp.task('platform-order-validation', (done) => {
    var checkInJenkins = shelljs.exec(`git diff origin/${branchName} --name-only --diff-filter=DM`).stdout.split('\n').filter(Boolean);
    var platformOrder = 'platform-order.json';
    if (checkInJenkins.includes(platformOrder)) {
        console.log(`The ${platformOrder} file has modified or deleted.!!!`);
        process.exit(1);
    }
    done();
});

gulp.task('test', gulp.series('typo', 'file-validation','seo-validation','js-lint', 'html-lint','url-validation', function(done){
    done();
}));

gulp.task('ci-test', gulp.series('platform-order-validation', 'redirect-validation', 'test',function(done) {
    done();
}));


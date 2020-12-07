var gulp = require('gulp');
var Typo = require('typo-js');
var dictionary = new Typo('en_US');
var path = require('path');
var fs = require('fs');
var common = {};
if (fs.existsSync('./config.json')) {
    common = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
}
var checkedFiles = {
    folders: [],
    files: [],
    upperCase: []
};
function getSubFolders(baseFolder, folderList = []) {
    let folders = fs.readdirSync(baseFolder).filter(file => fs.statSync(path.join(baseFolder, file)).isDirectory());
    folders.forEach(folder => {
        folderList.push(folder);
        getSubFolders(path.join(baseFolder,folder), folderList);
    });

    return folderList;
}

gulp.task('file-validation', function (done) {
    var glob = require('glob');

    var folderNames = getSubFolders('./docs/');
    for (var i = 0; i < folderNames.length; i++) {
        checkFileNames(folderNames[i]);
    }
    var fileNames = glob.sync('./docs/**/*.*', {
        ignore: ['./docs/**/*.png', './docs/**/*.svg', './docs/**/*.json', './docs/**/*.eot', './docs/**/*.ttf',
            './docs/**/*.woff', './docs/**/*.gif', './docs/**/*.jpg', './docs/**/*.JPG', './docs/**/*.PNG']
    });
    for (var k = 0; k < fileNames.length; k++) {
        checkFileNames(fileNames[k], true);
    }
    printError(done);
});

function checkFileNames(filePath, isFiles) {
    var type = isFiles ? 'files' : 'folders';
    var fileName = isFiles ? path.basename(filePath).split('.')[0] : filePath;
    var splitted = fileName.split('-');
    var isValid = true;
    var isUpperCase = false;

    common.customNames = common.customNames ? common.customNames : [];
    for (var j = 0; j < splitted.length; j++) {
        if (!dictionary.check(splitted[j]) && common.customNames.indexOf(splitted[j]) === -1) {
            isValid = false;
        }
        if (splitted[j].match(new RegExp(/^[A-Z]/)) !== null) {
            isUpperCase = true;
        }
    }
    if (!isValid) {
        checkedFiles.isFailed = true;
        checkedFiles[type].push(filePath);
    }
    if (isUpperCase) {
        checkedFiles.isFailed = true;
        checkedFiles.upperCase.push(filePath);
    }

}

function printError(done) {
    if (!checkedFiles.isFailed) {
        console.log('\n******* All Files Have Valid Names *******\n');
        done();
        return;
    }
    if (checkedFiles.folders.length) {
        console.log('\n******* The Below Folder Names Are Invalid *******\n');
        console.log(checkedFiles.folders.toString().split(',').join('\n'));
    }

    if (checkedFiles.files.length) {
        console.log('\n******* The Below File Names Are Invalid *******\n');
        console.log(checkedFiles.files.toString().split(',').join('\n'));
    }

    if (checkedFiles.upperCase.length) {
        console.log('\n******* The Below File Names  Have The UpperCase letters *******\n');
        console.log(checkedFiles.upperCase.toString().split(',').join('\n'));
    }
    process.exit(1);
    done();
}

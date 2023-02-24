var gulp = require('gulp');
var glob = require('glob');
var request = require('request-promise');
var fs = require('fs');
let routerData;
const path = require('path');
var log = require('single-line-log').stdout;
var httpBrokenUrl = [];
var internalBrokenUrl = [];
var fileNotAvail = [];

gulp.task('url', async function (done) {
    routerData = require('./../left-toc.json').routerData;
    var fileNames = glob.sync('./docs/**/*.md');
    for (var k = 0; k < fileNames.length; k++) {
        await brokenURL(fileNames[k]);
    }
    printError(done);
});

gulp.task('url-validation',gulp.series('url','toc'));

async function brokenURL(filePath) {
    var content = fs.readFileSync(filePath, 'utf8');
    var urlPattern = /\[(.*?)\]\((.*?)\)/g; // regex pattern to parse the url [alt-text](url location)
    while ((url = urlPattern.exec(content)) !== null) {
        if (url[2] !== undefined) {
            if (url[2].indexOf('http') > -1) {
                await validateUrl(url[2], filePath);
            }
            else if (!(url[2].indexOf('/static') > -1) && !(url[2].indexOf('{{site.') > -1)) {
                url = url[2].indexOf('/') === 0 ? url[2] : path.join(filePath, url[2]).substring(4).replace(/\\/g, '/');
                if ((url.indexOf('#') > -1)) {
                    validateHeadings(url);
                }
                else if (!routerData[url]) {
                    print(url);
                    internalBrokenUrl = internalBrokenUrl + url + ' ---> ' + filePath + '\n';
                }
            }
        }
    }
}

function validateHeadings(url) {
    print(url);
    if (url.indexOf('#aspnet') > -1) {
        url = url.replace(/#aspnet/g, '#asp.net');
    }
    var heading = url.split('#')[1].replace(/-/g, ' ').replace(/\//g, '');
    var basePath = url.includes('.md') ? url.split('#')[0].substring(0, (url.split('#')[0]).length - 1) :'./docs' + url.split('#')[0].substring(0, (url.split('#')[0]).length - 1) + '.md';
    try {
        var content = fs.readFileSync(basePath, 'utf8');
    }
    catch{
        if (content === undefined) {
            fileNotAvail = fileNotAvail + url + ' ---> ' + basePath + '\n';
            internalBrokenUrl = internalBrokenUrl + url + ' ---> ' + basePath + '\n';
            return;
        }
    }
    var regexPattern = [`<a\\s+(?:[^>]*?\\s+)?href="#${heading}`, '^# ' + heading, '^## ' + heading, '^### ' + heading, '^#### ' + heading, '^##### ' + heading, '^###### ' + heading];
    for (var i = 0; i < regexPattern.length; i++) {
        if (((regexString = new RegExp(regexPattern[i], 'mi').exec(content)) !== null)) {
            return;
        }
    }
    internalBrokenUrl = internalBrokenUrl + url + ' ---> ' + basePath + '\n';
}

async function validateUrl(url, filePath) {
    try {
        print(url);
        await request.get(url, { resolveWithFullResponse: true });
    } catch (e) {
        httpBrokenUrl = httpBrokenUrl + url + ' ---> ' + filePath + '\n';
    }
}

function print(url) {    
    log('Validating the URL... \x1b[32m' + url + '\x1b[0m');
}
function printError(done) {
    log("\x1b[32mValidation completed.\x1b[0m");
    var isValid = true;
    if (httpBrokenUrl.length) {
        isValid = false;
        console.log('\n******* THE BELOW ONLINE URL\'S ARE BROKEN DUE TO RE-DIRECTION *******\n');
        console.log(httpBrokenUrl);
    }
    if (internalBrokenUrl.length) {
        isValid = false;
        console.log('\n******* THE BELOW INTERNAL URL\'S ARE BROKEN *******\n');
        console.log(internalBrokenUrl);
    }
    if (fileNotAvail.length) {
        isValid = false;
        console.log('\n******* THE FILES\'S ARE NOT AVAILABLE *******\n');
        console.log(fileNotAvail);
    }
    if (isValid) {
        console.log('\n******* THERE IS NO BROKEN URLS *******\n');
        done();
        return;
    }
    process.exit(1);
    done();
}
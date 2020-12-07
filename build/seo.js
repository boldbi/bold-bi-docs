const gulp = require('gulp');
const { existsSync, readFileSync, statSync } = require('fs');
const { sync } = require('glob');

let checkedFiles = {
    titles: [],
    descriptions: []
};
let titleDescription = [];
let duplicates = {
    title: [],
    description: []
};
let mdImage = {};
let invalidFileExtension = [];
let invalidImgExtension = [];
let notUsedImg = [];
let noMetaData = [];
let multipleH1 = [], duplicateH1 = [], h1NotAvailable = [];
let imgAltText = [], imgNotAvail = [], imgLargeSize = [];
const IMAGE_SIZE = 100.00;

gulp.task('seo-validation', (done) => {
    let fileNames = sync('./docs/**/*.md*');
    for (let k = 0; k < fileNames.length; k++) {
        validateDescLength(fileNames[k]);
    }
    validateImage();
    validateDocs();
    validateDuplicateTitleDesc();
    printError(done);
});


function validateDescLength(filePath) {
    let content = readFileSync(filePath, 'utf8');
    let metadata, metaPattern = /\n-{3}/g;
    let metaJson = {};
    if (content.slice(0, 3) === '---') {
        metadata = metaPattern.exec(content);
        if (metadata) {
            metaJson = getMetaTags(content.slice(4, metadata.index));
            if (metaJson['title'] === undefined || metaJson['description'] === undefined) {
                noMetaData = noMetaData + filePath + '\n';
            }
            if (metaJson['title'] && metaJson['title'].length <= 45 || metaJson['title'].length > 60) {
                checkedFiles.titles = checkedFiles.titles + filePath + '\n';
            }
            if (metaJson['description'] && (metaJson['description'].length < 100 || metaJson['description'] > 160)) {
                checkedFiles.descriptions = checkedFiles.descriptions + filePath + '\n';
            }
            titleDescription.push({ 'filePath': filePath, 'title': metaJson['title'], 'description': metaJson['description'] });
        }
    } else {
        noMetaData = noMetaData + filePath + '\n';
    }

    const h1Pattern = /\n(# .+)/g; // regex patter to parse H1 tag
    let count = 0;
    while ((heading = h1Pattern.exec(content)) !== null) {
        if (count == 1) {
            multipleH1 = multipleH1 + filePath + '\n';
        }
        count++;
        if (count == 1 && heading[1].slice(2) === metaJson['title']) { //slice(2) to neglet # and space
            duplicateH1 = duplicateH1 + filePath + '\n';
        }
    }
    count = 0;

    if ((heading = h1Pattern.exec(content)) === null) {
        h1NotAvailable = h1NotAvailable + filePath + '\n';
    }

    const imgPattern = /!\[(.*?)\]\((.*?)\)/g; // regex pattern to parse the images ![alt-text](image location)
    if (content.indexOf('![') > -1) {
        while ((img = imgPattern.exec(content)) !== null) {
            if (img.index === imgPattern.lastIndex) {
                imgPattern.lastIndex++;
            }
            if (img[1] == undefined || img[1] == '') {
                imgAltText = imgAltText + img[2] + ' ---> ' + filePath + '\n';
            }
            if (img[2] != undefined) {
                img[2]
                let imgFile = '.' + img[2];
                if (existsSync(imgFile)) {
                    mdImage[imgFile] = true;
                    if ((statSync(imgFile).size) / 1024 > IMAGE_SIZE) {
                        imgLargeSize = imgLargeSize + img[2] + ' ---> ' + filePath + '\n';
                    }
                } else {
                    imgNotAvail = imgNotAvail + img[2] + ' ---> ' + filePath + '\n';
                }

            }
        }
    }
}

function validateImage() {
    const fileNames = sync('./static/assets/**/*.**');
    for (let i = 0; i < fileNames.length; i++) {
        if (statSync(fileNames[i]).isDirectory()) continue;
        let exe = fileNames[i].split('.')[2];
        if ((exe !== 'png' && exe !== 'jpeg' && exe !== 'svg' && exe !== 'PNG' && exe !== 'JPEG' && exe !== 'SVG')) {
            invalidImgExtension.push(fileNames[i]);
        }
        if (mdImage[fileNames[i]] === undefined) {
            notUsedImg.push(fileNames[i]);
        }
    }
}

function validateDocs() {
    let fileNames = sync('docs/**/*.**');
    for (let i = 0; i < fileNames.length; i++) {
        let file = fileNames[i];
        if (statSync(file).isDirectory()) continue;
        let exe = file.substr(file.lastIndexOf('.') + 1);
        if ((exe !== 'md' && exe !== 'json')) {
            invalidFileExtension.push(file);
        }
    }
}

// Parse the meta data and convert it into JSON format
function getMetaTags(metadata) {
    let result = {};
    metadata.split('\n').forEach(function (content) {
        if (content.indexOf(":") > -1) {
            let keyValuePair = content.split(/:[^\/]/);
            if (keyValuePair[0] && keyValuePair[1]) {
                result[keyValuePair[0]] = keyValuePair[1].trim();
            }
        }
    });
    return result;
}

function validateDuplicateTitleDesc() {
    checkDuplicates('title');
    checkDuplicates('description');
}

// Check whether any duplicate entries are exists
function checkDuplicates(propertyName) {
    let propArr = titleDescription.map(function (item) { return item[propertyName] });
    propArr.some(function (item, index) {
        if (propArr.indexOf(item) != index) {
            duplicates[propertyName] = duplicates[propertyName] + titleDescription[index]['filePath'] + '\n';
        }
    });
}

// Print the SEO related errors in console.
function printError(done) {
    let isValid = true;
    if (checkedFiles.titles.length) {
        isValid = false;
        console.log('\n******* THE BELOW FILES HAVE INVALID META TITLE LENGTH (EXPECTED : 45 - 60 CHARACTERTS) *******\n');
        console.log(checkedFiles.titles);
    }

    if (checkedFiles.descriptions.length) {
        isValid = false;
        console.log('\n******* THE BELOW FILES HAVE INVALID META DESCRIPTION LENGTH (EXPECTED : 100 - 160 CHARACTERTS) *******\n');
        console.log(checkedFiles.descriptions);
    }

    if (duplicates.title.length) {
        isValid = false;
        console.log('\n******* THE BELOW FILES HAVE DUPLICATE TITLES *******\n');
        console.log(duplicates.title);
    }

    if (duplicates.description.length) {
        isValid = false;
        console.log('\n******* THE BELOW FILES HAVE DUPLICATE DESCRIPTIONS *******\n');
        console.log(duplicates.description);
    }

    if (noMetaData.length) {
        isValid = false;
        console.log('\n******* THE BELOW FILES DOESN"T HAVE META TITLE OR DESCRIPTION *******\n');
        console.log(noMetaData);
    }

    if (multipleH1.length) {
        isValid = false;
        console.log('\n******* THE BELOW FILES HAVE MORE THAN ONE H1 *******\n');
        console.log(multipleH1);
    }

    if (duplicateH1.length) {
        isValid = false;
        console.log('\n******* THE BELOW FILES HAVE SAME TITLE AND H1 *******\n');
        console.log(duplicateH1);
    }

    if (h1NotAvailable.length) {
        isValid = false;
        console.log('\n******* THE BELOW FILES HAVE NO H1 *******\n');
        console.log(h1NotAvailable);
    }

    if (imgAltText.length) {
        isValid = false;
        console.log('\n******* THE BELOW FILES DOESN"T HAVE PROPER IMAGE ALT TEXT *******\n');
        console.log(imgAltText);
    }
    if (imgLargeSize.length) {
        isValid = false;
        console.log('\n******* THE BELOW IMAGE FILES ARE TOO LARGE IN SIZE (EXPECTED 100KB) *******\n');
        console.log(imgLargeSize);
    }
    if (imgNotAvail.length) {
        isValid = false;
        console.log('\n******* THE BELOW IMAGE FILES ARE NOT AVAILABLE *******\n');
        console.log(imgNotAvail);
    }

    if (notUsedImg.length) {
        isValid = false;
        console.log('\n******* THE BELOW IMAGE FILES ARE NOT USED IN DOCUMENT *******\n');
        console.log(notUsedImg);
    }

    if (invalidFileExtension.length) {
        isValid = false;
        console.log('\n******* THE BELOW FILES DOESN"T HAVE VALID EXTENSION *******\n');
        console.log(invalidFileExtension);
    }

    if (invalidImgExtension.length) {
        isValid = false;
        console.log('\n******* THE BELOW IMAGES DOESN"T HAVE VALID EXTENSION *******\n');
        console.log(invalidImgExtension);
    }

    if (isValid) {
        console.log('\n******* ALL THE FILE HAVE VALID TITLES, DESCRIPTIONS AND IMAGE ALT TEXTS *******\n');
        done();
        return;
    }

    process.exit(1);
    done();
}

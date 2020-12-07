let { createTab } = require('./tab');

function updateContent(mdcontent, routerPath) {
    let toc = require('./../left-toc.json');
    if (isRegisterdFile(routerPath, toc)) {
        mdcontent = processImages(mdcontent, toc);
        return createTab(mdcontent, routerPath);
    }
}

function isRegisterdFile(routerPath, toc) {
    return toc.routerData[routerPath];
}

function processImages(mdcontent, toc) {
    let content = mdcontent;
    let regex = /\!\[([^\]]*)\]\(([^)]*)\)/gm;
    let resultantOutput;
    let urlBasePath = toc.pathPrefix ? toc.pathPrefix + '/' : '/';
    while ((resultantOutput = regex.exec(mdcontent)) !== null) {
        let relativeImgPath = resultantOutput[2];
        if (!relativeImgPath.indexOf('http') !== -1) {
            content = content.replace(relativeImgPath, (urlBasePath + relativeImgPath.replace('/static/', '')));
        }
    }
    return content;
}

exports.updateContent = updateContent;

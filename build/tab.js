var glob = require('glob');
var fs = require('fs');
var path = require('path');

var prismObj = {
    'html': 'html',
    'js': 'js',
    'ts': 'typescript',
    'css': 'css',
    'scss': 'scss',
    'tsx': 'tsx',
    'jsx': 'jsx',
    'cs': ' csharp',
    'cshtml': 'html',
    'json': 'json'
}
var tabObj = {
    tabRegex: /{% tab [^\0]*?{% endtab %}/gm,
    tabHeaderRegex: /({% tab ([^>]+) %}\r?\n|\r)|({% tab ([^>]+)%}\r?\n|\r)/,
    tabItemRegex: /{% tabItem [^\0]*?{% endtabItem %}/gm,
    tabItemContentRegex: /{% tabItem [^>]* %}((.|[\n\r])*){% endtabItem %}/,
    tabItemHeaderRegex: /({% tabItem ([^>]+) %}\r?\n|\r)|({% tabItem ([^>]+)%}\r?\n|\r)/
};

function createTab(mdcontent) {
    let tabContents = mdcontent.match(tabObj.tabRegex) ? mdcontent.match(tabObj.tabRegex) : [];
    for (let i = 0; i < tabContents.length; i++) {
        let tabHeader = tabContents[i].match(tabObj.tabHeaderRegex)[0].trim();
        let templatePath = tabHeader.match(/demoPath="([^"]+)|demoPath= "([^"]+)/)[1];
        let samplePath = './static/demos/' + templatePath;
        let sourceFiles = [];
        let filesGlob = tabHeader.match(/files="([^"]+)/)[1];
        let filesCollection = filesGlob.split(',').map((file) => { return file.trim() }), sampleFiles = [];
        for (let j = 0; j < filesCollection.length; j++) {
            sampleFiles.push(samplePath + '/' + filesCollection[j]);
        }
        let patternString = sampleFiles.toString();
        let globPattern = sampleFiles.length > 1 ? '{' + patternString + '}' : patternString;
        sourceFiles = glob.sync(globPattern, {
            nosort: true
        });
        mdcontent = mdcontent.replace(tabContents[i], createTabContent(tabContents[i], sourceFiles, samplePath, filesCollection));
    }
    return mdcontent;
}

function createTabContent(innerTabContent, sourceFiles, samplePath, filesCollection) {
    let tab = `<div class="doc-tab" data-sample="${samplePath.replace('./static/', '/') + '/'}">`;
    let tabHeader = '<div class="e-tab-header">';
    let tabContent = '<div class="e-content">';
    let tabItems = {};
    let tabItemContents = innerTabContent.match(tabObj.tabItemRegex) ? innerTabContent.match(tabObj.tabItemRegex) : [];
    sourceFiles.forEach((file) => {
        let fileContent = fs.readFileSync(file, 'utf8');
        let fileExt = path.basename(file).split('.');
        let language = fileExt[fileExt.length - 1];
        let name = file.replace(samplePath + '/', '').trim();
        let highlighted = '\n\n```' + prismObj[language] + '\n' + fileContent.trim() + '\n```\n\n'
        tabItems[name] = highlighted;
    });
    tabItemContents.forEach((content) => {
        let tabHeaderRegex = content.match(tabObj.tabItemHeaderRegex)[0].trim();
        let name = tabHeaderRegex.match(/header="([^"]+)/)[1];
        tabItems[name] = content.match(tabObj.tabItemContentRegex)[1]
    });

    let itemKeys = Object.keys(tabItems);
    let filteredKeys = filesCollection.filter(key => {
        if (itemKeys.indexOf(key) !== -1) {
            return 1;
        }
    });
    for (let i = 0; i < filteredKeys.length; i++) {
        tabHeader += '<div>' + filteredKeys[i] + '</div>';
        tabContent += '<div>' + tabItems[filteredKeys[i]] + '</div>';
    }

    tabHeader += '</div>';
    tabContent += '</div>';
    tab += tabHeader + tabContent + '</div>'
    return tab;
}

exports.createTab = createTab;
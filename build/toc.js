var fs = require('fs');
var glob = require('glob');
var tree, paths, searchData, accData, routerData, indexPageMapper;
var { platformOrder } = require('./config.js');
const path = require('path');
const config = JSON.parse(fs.readFileSync(path.resolve('./config.json'), 'utf8'));
var argv = require('yargs').argv;
var pathNames=['overview','evaluation-quick-start','deploying-bold-bi','application-startup',
'getting-started','embedding-options',
'working-with-data-sources','visualizing-data',
'working-with-dashboards','artificial-intelligence-and-machine-learning','security-configuration','site-administration','managing-resources', 'resource-migration',
'manage-webhooks', 'localization', 'white-labeling-in-bold-bi', 'multi-tenancy','responsive-layout','mobile-app','server-api-reference','utilities','monitoring','disaster-recovery', 'transformation-use-cases'];
const isHtml = 'html';
function generateToc() {
    // collect all summary files (support split summaries like summary-admin.json etc.)
    let Files = glob.sync('./docs/summary*.json');
    if (!Files || Files.length === 0) {
        Files = glob.sync('./docs/summary.json');
    }
    let fileContent = {};
    indexPageMapper = {};

    // preserve order of top-level keys as they appear across files
    let mergedKeysOrder = [];
    Files.forEach(filePath => {
        const jsonObj = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        Object.keys(jsonObj).forEach(k => {
            if (mergedKeysOrder.indexOf(k) === -1) mergedKeysOrder.push(k);
        });
        fileContent = Object.assign(fileContent, jsonObj);
    });

    // map each top-level key to a pathName (fallback to a slugified key)
    for (let i = 0; i < mergedKeysOrder.length; i++) {
        indexPageMapper[mergedKeysOrder[i]] = pathNames[i] || mergedKeysOrder[i].trim().split(' ').join('-').toLowerCase();
    }
    let allTreeData = getTreeData(fileContent, indexPageMapper);
    let stringified = JSON.stringify(allTreeData, null, 4);
    fs.writeFileSync('./left-toc.json', stringified, 'utf8');
};
exports.generateToc = generateToc;
function getTreeData(data, indexPageMapper) {
    let keys = Object.keys(data);
    let filteredKeys = keys.filter(key => {
        if (platformOrder.indexOf(key) === -1) {
            return 1;
        }
    });
    let filteredPlatform = platformOrder.filter(key => {
        if (keys.indexOf(key) !== -1) {
            return 1;
        }
    });
    keys = filteredKeys.concat(filteredPlatform);
    treeData = {};
    childTree = {};
    tree = [];
    paths = [];
    searchData = [];
    accData = [];
    routerData = {};

    for (let i = 0; i < keys.length; i++) {
        let isCommon = typeof data[keys[i]] === 'string' ? true : false;
        if (isCommon) {
            accData.push({ header: `<div class='acc-path' data='${data[keys[i]] == '/' ? `/` : `/${removeMisc(data[keys[i]])}/`}'>${keys[i]}</div>` });  
            paths.push(data[keys[i]] == '/' ? '/' : `/${removeMisc(data[keys[i]])}/`)
            routerData[data[keys[i]] == '/' ? '/' : `/${removeMisc(data[keys[i]])}/`] = { title: [keys[i]], isCommonSrc: true, isIndexPage: false, isDemo: Boolean(getQueryValue(isHtml, data[keys[i]])) };
            setPreviousPath(paths, data[keys[i]] == '/' ? '/' : `/${removeMisc(data[keys[i]])}/`)
            setNextPath(paths, data[keys[i]] == '/' ? '/' : `/${removeMisc(data[keys[i]])}/`)
            searchData.push({ title: keys[i], id: data[keys[i]] == '/' ? '/' : `/${removeMisc(data[keys[i]])}/`, component: '' });
        } else {
            routerData[`/${indexPageMapper[keys[i]]}/`] = { title: [keys[i]], isCommonSrc: false, isIndexPage: true, platform: keys[i], isDemo: Boolean(getQueryValue(isHtml, indexPageMapper[keys[i]])) };
            let previousPathIndex = paths.length - 1;
            routerData[`/${indexPageMapper[keys[i]]}/`]['prevPath'] = paths[previousPathIndex];
            generateTreeData(data[keys[i]], undefined, keys[i]);
            routerData[`/${indexPageMapper[keys[i]]}/`]['nextPath'] = paths[previousPathIndex + 1]
            accData.push({
                header: `<div class='acc-path' data='/${indexPageMapper[keys[i]]}/'>${keys[i]}</div>`,
                data: keys[i],
                content: `<div id='${keys[i]}' class='toc-tree'></div>`
            })
            treeData[keys[i]] = tree;
            tree = [];
        }
    }
    return {
        homePath: paths[0],
        accData: accData,
        treeData: treeData,
        routerData: routerData,
        indexPageMapper: indexPageMapper,
        searchData: searchData,
        pathPrefix: argv.prefix ? argv.prefix : '',
        siteVersion: argv.siteVersion ? argv.siteVersion : config.siteVersion,
        umsVersion: argv.umsVersion ? argv.umsVersion : config.umsVersion
    };
}

function generateTreeData(data, parentIns, firstLevelKey) {
    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
        let keyName = keys[i];
        let keyValue = data[keyName];

        // skip metadata keys and treat `pages` as a transparent container
        if (keyName === 'slug') {
            continue;
        }
        if (keyName === 'pages') {
            // do not create a "pages" segment in the URL - iterate its children
            generateTreeData(keyValue, parentIns, firstLevelKey);
            continue;
        }
        if (keyValue instanceof Object) {
            let obj = generateTreeObj(keyName);
            // prefer explicit slug in the object when available
            let formattedName = (keyValue.slug && typeof keyValue.slug === 'string')
                ? removeMisc(keyValue.slug)
                : obj.name.trim().split(' ').join('-').toLowerCase();
            obj['routerPath'] = parentIns ? `${parentIns.routerPath}/${formattedName}` : formattedName;
            let routerPath = `${indexPageMapper[firstLevelKey]}/${obj['routerPath']}`;
            obj.id = `/${routerPath}/`;
            routerData[`/${routerPath}/`] = { title: [firstLevelKey, keys[i]], isCommonSrc: false, isIndexPage: true, platform: firstLevelKey };
            searchData.push({ title: keys[i], id: `/${routerPath}/`, component: firstLevelKey });
            let previousPathIndex = paths.length - 1;
            routerData[`/${routerPath}/`]['prevPath'] = paths[previousPathIndex];
          
            if (parentIns) {
                if (parentIns['child']) {
                    parentIns['child'].push(obj);
                } else {
                    parentIns['child'] = [obj];
                }
            } else {
                tree.push(obj);
            }
            generateTreeData(keyValue, obj, firstLevelKey);
            routerData[`/${routerPath}/`]['nextPath'] = paths[previousPathIndex + 1];
        } else {
            let obj = generateTreeObj(keyName);
            let formattedName = removeMisc(keyValue);
            obj['routerPath'] = parentIns ? `${parentIns.routerPath}/${formattedName}` : formattedName;
            let routerPath = `${indexPageMapper[firstLevelKey]}/${obj['routerPath']}`;
            obj.id = `/${routerPath}/`;
            paths.push(`/${routerPath}/`);
            routerData[`/${routerPath}/`] = { title: [firstLevelKey, keys[i]], isCommonSrc: false, isIndexPage: false, platform: firstLevelKey, isDemo: Boolean(getQueryValue(isHtml, keyValue)) };
            setPreviousPath(paths, `/${routerPath}/`)
            setNextPath(paths, `/${routerPath}/`)
            searchData.push({ title: keys[i], id: `/${routerPath}/`, component: firstLevelKey });
            if (parentIns) {
                if (parentIns['child']) {
                    parentIns['child'].push(obj);                   
                } else {
                    parentIns['child'] = [obj];
                }
            } else {
                tree.push(obj);                
            }
        }
    }
}
function getQueryValue(queryName, keyValue) {
    const queryNameRegex = new RegExp('[\\?&]' + queryName + '=([^&#]*)').exec(keyValue);
    return queryNameRegex ? queryNameRegex[1] : undefined;
};
function removeQueryString(keyValue) {
    return keyValue.split('?')[0];
}
function setPreviousPath(paths, curPath) {
    if (paths[paths.length - 2]) {
        routerData[curPath]['prevPath'] = paths[paths.length - 2];
    }
}
function setNextPath(paths, nextpath) {
    if (paths[paths.length - 2]) {
        routerData[paths[paths.length - 2]]['nextPath'] = nextpath;
    }
}

function generateTreeObj(name) {
    return {
        name: name,
        tooltip: name
    };
}
function removeMisc(fname) {
    const cleaned = removeQueryString(fname.replace('.md', '').trim());
    return cleaned.replace(/^\/+|\/+$/g, '');
}

var fs =require('fs');
var path = require('path');

var config = JSON.parse(fs.readFileSync(path.resolve('./config.json'), 'utf8'));
var platform = JSON.parse(fs.readFileSync(path.resolve('./platform-order.json'), 'utf8'));
exports.platformOrder = platform.platformOrder;
exports.releaseVersion = config.siteVersion;


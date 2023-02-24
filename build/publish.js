var gulp =  require('gulp');
var fs = require('fs');
var shelljs = require('shelljs');

// Ship docs at root 
function shipDocs(source, destination, ignore) {
    var glob = require('glob');
    var files = glob.sync(source, { silent: true, ignore: ignore });
    for (var i = 0; i < files.length; i++) {
        var paths = files[i].split('/');
        var file = paths[paths.length - 1];
        var target = destination + '/' + file;
        var stats = fs.lstatSync(files[i]);
        if(stats.isDirectory()){
         if (!fs.existsSync(target)) {
            shelljs.mkdir('-p', target);
          }
          shipDocs(files[i] + '/*', target);
        } else {
          fs.writeFileSync(target, fs.readFileSync(files[i]));
        }
    }
}
exports.shipDocs = shipDocs;

gulp.task('publish-docs', done => {
    shelljs.mkdir('-p', './cireports');
    shelljs.mkdir('-p', './cireports/boldbi-docs');    
    shipDocs('./public/*', './cireports/boldbi-docs'); 
    done();   
});

gulp.task('publish',gulp.series('production-build','publish-docs'));

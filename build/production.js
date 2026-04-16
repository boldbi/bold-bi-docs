var gulp = require('gulp')
var shelljs = require('shelljs')

gulp.task('production', (done) => {
	shelljs.exec('gatsby build')
	done()
})

gulp.task('production-preview', (done) => {
	shelljs.exec('gatsby serve --open')
	done()
})

gulp.task('production-build', gulp.series('build', 'production'))
gulp.task('production-build-and-preview', gulp.series('production-build', 'production-preview'))
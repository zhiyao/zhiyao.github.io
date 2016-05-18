var gulp = require('gulp')
var browserSync = require('browser-sync')

gulp.task('browserSync', ['jekyllBuild'], function () {
    browserSync({
        server: { baseDir: '_site/' }
    })
})

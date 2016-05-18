var gulp        = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('jekyllRebuild', ['jekyllBuild'], function () {
    browserSync.reload();
});

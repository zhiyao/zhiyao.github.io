var gulp = require('gulp'),
  requireDir = require('require-dir')

requireDir('./tasks', { recurse: true })

gulp.task('default', ['sass', 'imagemin', 'browserSync', 'watch'])

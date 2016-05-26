var gulp = require('gulp')

gulp.task('watch', function () {
  gulp.watch('_sass/**/*', ['sass'])
  gulp.watch('assets/images/**/*.{jpg,png,gif}', ['imagemin'])
  gulp.watch(['_drafts/*', '_includes/*', '_layouts/*', '_posts/*', '*.{html,md}', '_config.yml'], ['jekyllRebuild'])
})

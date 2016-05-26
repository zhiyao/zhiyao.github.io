var gulp = require('gulp')
var browserSync = require('browser-sync')

var sass = require('gulp-sass')

gulp.task('sass', function () {
  return gulp.src('_sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css/'))
    .pipe(gulp.dest('_includes'))
    .pipe(gulp.dest('_sites/assets/css'))
    .pipe(browserSync.reload({stream: true}))
})

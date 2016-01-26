var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(end) {
  gulp.src('./style.scss')
  .pipe(sass())
  .on('error', sass.logError)
  .pipe(gulp.dest('./'))
  .on('end', end)
});

gulp.task('default', ['sass', 'watch']) 


gulp.task('watch', function() {
  gulp.watch('./style.scss', ['sass'])
});


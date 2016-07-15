var gulp = require('gulp');
var webserver = require('gulp-webserver');

var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('default', function() {
  // place code for your default task here
});
 
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      fallback: 'index.html',
      port: 2020,
      open: true      
    }));
});

gulp.task('cssmin', function () {
    gulp.src('assets/css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});
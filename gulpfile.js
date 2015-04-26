var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var del = require('del');

gulp.task('clean', function(cb) {
  del(['build'], cb);
});

gulp.task('styles', function() {
  return gulp.src('sass/style.scss')
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('css/'))
    .pipe(notify({ message: 'Styles are good to go...' }));
});

gulp.task('watch', function() {
  gulp.watch('sass/**', ['styles']);
});

gulp.task('default', ['watch', 'styles']);

function errorHandler (error) {
  console.log(error.toString());
  this.emit('end');
}
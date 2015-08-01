/* Build tasks */

// Gulp Dependencies
var gulp = require('gulp');
var rename = require('gulp-rename');

// Style Dependencies
var minify = require('gulp-minify-css');

// Build Dependencies
var uglify = require('gulp-uglify');

gulp.task('minify', ['sass'], function() {
  return gulp.src('./dist/css/main.css')
    .pipe(minify())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('uglify', ['browserify'], function() {
  return gulp.src('./dist/js/bundle.js')
    .pipe(uglify())
    .pipe(rename('bundle.min.js'))
    .pipe(gulp.dest('./public/js'));
});

/*gulp.task('copy', function () {
  return gulp.src([
    'app/css/main.css',
  ],
  {
  	base: './app'
  }
  ).pipe(gulp.dest('public'));
});*/

gulp.task('build', ['minify', 'uglify']);
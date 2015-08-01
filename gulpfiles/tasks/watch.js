/* Watch tasks */

// Gulp Dependencies
var gulp = require('gulp');

gulp.task('watch', function () {
    gulp.watch(['app/css/**/*.sass', 'app/css/**/*.scss'], ['sass']);
    gulp.watch(['app/js/**/*.js', 'app/js/*.js'], ['browserify']);
});
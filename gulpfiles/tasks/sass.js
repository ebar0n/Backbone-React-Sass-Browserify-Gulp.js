/* Sass tasks */

// Gulp Dependencies
var gulp = require('gulp');

// Style Dependencies
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

gulp.task('sass', function () {
	'use strict';
    return gulp.src('./app/css/main.sass')
        .pipe(sass({
            includePaths: ['sass']
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('./dist/css'));
});
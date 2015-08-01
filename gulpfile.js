// Gulp Dependencies
var gulp = require('gulp');
var requireDir = require('require-dir');

requireDir('./gulpfiles/tasks', { recurse: true });

gulp.task('default', ['watch']);
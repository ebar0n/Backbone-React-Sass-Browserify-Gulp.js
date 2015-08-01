/* Browserify tasks */

// Gulp Dependencies
var gulp = require('gulp');

// Build Dependencies
var browserify = require("browserify");
var babelify = require("babelify");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
 
gulp.task('browserify', function() {
  	browserify("./app/js/app.js",
  		{
  			debug: true,
  			noParse: ['jquery'] 
		})
	    .transform(babelify)
	    .bundle()
	    .pipe(source('bundle.js'))
	    .pipe(buffer())
	    .on("error", function (err) {
	    	console.log("Error : " + err.message); 
	    })
	    .pipe(gulp.dest("./dist/js"));
});
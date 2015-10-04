// Load all the plugins (Seen in package.json dev-dependencies)
var gulp 		= require('gulp');
var minifyCSS 	= require('gulp-minify-css');    // minifies css files
var rename 		= require('gulp-rename');          // renames files
var concat		= require('gulp-concat');				   // Converts multiple files into one file
var uglify 		= require('gulp-uglify');				   // stringifies js files
var nodemon 	= require('gulp-nodemon');				 // Watches for changing files and restarts
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('client/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('client/app/app.css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('client/**/*.scss', ['sass']);
});

// the nodemon task
gulp.task('nodemon',function() {
	nodemon({
		script:'server/app.js',
		ext:'js html'
	})
	.on('restart',function() {
		console.log("restarted");
	});
});

gulp.task('default', ['nodemon', 'sass:watch']);		// Just run gulp!

// Load all the plugins (Seen in package.json dev-dependencies)
var gulp 		= require('gulp');
var minifyCSS 	= require('gulp-minify-css');    // minifies css files
var rename 		= require('gulp-rename');          // renames files
var jshint 		= require('gulp-jshint');				   // Checks js files for errors ie. semi colons
var concat		= require('gulp-concat');				   // Converts multiple files into one file
var uglify 		= require('gulp-uglify');				   // stringifies js files
var ngAnnotate 	= require('gulp-ng-annotate'); 	 // Makes angular files able to be combined into one file
var nodemon 	= require('gulp-nodemon');				 // Watches for changing files and restarts

// task to minify css files
gulp.task('css', function(){

});


gulp.task('watch',function() {

	// watch js files and run lint and run js and angular tasks
	// gulp.watch(	['server/**/*.js', 'client/**/*.js'],
	// 			['js', 'angular']);

	// watch css files and run css task to minify
	// gulp.watch(	['client/assets/css/*.css'],['css']);

});

gulp.task('restartServer', function(){
  gulp
    .src('server.js')
    .pipe(jshint())
    .pipe(nodemon())
})

// the nodemon task
gulp.task('nodemon',function() {
	nodemon({
		script:'server/app.js',
		ext:'js'
	})
	.on('restart',function() {
		console.log("restarted");
	});
});

gulp.task('default', ['nodemon']);		// Just run gulp!

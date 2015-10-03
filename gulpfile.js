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

// task for linting js files
gulp.task('js', function(){

	// grab all the files
	// return gulp.src([	'server/**/*.js',	'client/**/*.js'])
		// .pipe(jshint())
		// .pipe(jshint.reporter('default'));
});

// task to lint, minify, and concat frontend files
gulp.task('angular', function(){
	// return gulp.src(['public/app/.js', 'public/app/**/*.js'])
	// 	.pipe(ngAnnotate())
	// 	.pipe(concat('all.js'))
	// 	.pipe(uglify())
	// 	.pipe(gulp.dest('public/dist'));
});

gulp.task('watch',function() {

	// watch js files and run lint and run js and angular tasks
	gulp.watch(	['server/**/*.js', 'client/**/*.js'],
				['js', 'angular']);

	// watch css files and run css task to minify
	// gulp.watch(	['client/assets/css/*.css'],['css']);

});

// the nodemon task
gulp.task('nodemon',function() {
	nodemon({
		script:'server/app.js',
		ext:'js'
	})
	.on('start', ['watch'])
	.on('change', ['watch'])
	.on('restart',function() {
		console.log("restarted");
	});
});

gulp.task('default', ['nodemon']);		// Just run gulp!

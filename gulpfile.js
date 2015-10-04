// Load all the plugins (Seen in package.json dev-dependencies)
var gulp 		= require('gulp');
var minifyCSS 	= require('gulp-minify-css');    // minifies css files
var rename 		= require('gulp-rename');          // renames files
var jshint 		= require('gulp-jshint');				   // Checks js files for errors ie. semi colons
var concat		= require('gulp-concat');				   // Converts multiple files into one file
var uglify 		= require('gulp-uglify');				   // stringifies js files
var ngAnnotate 	= require('gulp-ng-annotate'); 	 // Makes angular files able to be combined into one file
var nodemon 	= require('gulp-nodemon');				 // Watches for changing files and restarts
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');

var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');

var path = {
  HTML: 'client/index.html',
  ALL: ['client/js/*.js', 'client/js/**/*.js', 'client/index.html'],
  JS: ['client/js/*.js', 'client/js/**/*.js'],
  MINIFIED_OUT: 'client/build.min.js',
  DEST_SRC: 'client/dist/src',
  DEST_BUILD: 'client/dist/build',
  DEST: 'client/dist'
};

gulp.task('transform', function(){
  gulp.src(path.JS)
    .pipe(react())
    .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('copy', function(){
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});

gulp.task('watch', function(){
  gulp.watch(path.ALL, ['transform', 'copy']);
});

// gulp.task('watch', function() {
//   gulp.watch(path.HTML, ['copy']);
//
//   var watcher  = watchify(browserify({
//     entries: [path.ENTRY_POINT],
//     transform: [reactify],
//     debug: true,
//     cache: {}, packageCache: {}, fullPaths: true
//   }));
//
//   return watcher.on('update', function () {
//     watcher.bundle()
//       .pipe(source(path.OUT))
//       .pipe(gulp.dest(path.DEST_SRC))
//       console.log('Updated');
//   })
//     .bundle()
//     .pipe(source(path.OUT))
//     .pipe(gulp.dest(path.DEST_SRC));
// });


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

gulp.task('default', ['nodemon', 'watch']);		// Just run gulp!

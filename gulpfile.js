var gulp = require('gulp');
var express = require('express');
var app = express();
var path = require('path');
var data = require('gulp-data');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var session = require('express-session');
var crypto = require('crypto');

app.use(express.static(path.resolve('./build')));

app.listen('8080', function() {
	console.log('Listening on port 8080');
});

gulp.task('html', function() {
	gulp.src('jade/index.jade')
	.pipe(data( function(file) {
		return require('./data.json');
	}))
	.pipe(jade({ 
		pretty: true
	}))
	.pipe(gulp.dest('build'))
	
});

gulp.task('css', function() {
	gulp.src(['css/*.css', 'sass/*.scss'])
	.pipe(sass().on('error', sass.logError))
	.pipe(concat('style.css'))
	.pipe(gulp.dest('build/css'))
});

gulp.task('images', function() {
	gulp.src('images/*')
		.pipe(gulp.dest('build/images'))
});

gulp.task('js', function() {
	gulp.src('js/**')
	.pipe(gulp.dest('build/js'))
});

gulp.task('watch', ['build'], function() {


	gulp.watch('jade/**/*.jade', ['html']);
	gulp.watch('sass/*.scss', ['css']);
	gulp.watch('images/*', ['images']);

});

gulp.task('build', ['html', 'css', 'images', 'js']);

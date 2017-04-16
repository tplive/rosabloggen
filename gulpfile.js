var gulp = require('gulp');
var express = require('express');
var app = express();

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

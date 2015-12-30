"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); // run local dev server
var open = require('gulp-open'); // open URL into the browser
var browserify = require('browserify'); // bundle JS
var reactify = require('reactify'); // Transform JSX into JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat'); // concatenate files

var config = {
  port:3001,
  baseURL: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    css: './src/css/*.css',
    mainJS: './src/main.js',
    dist: './dist'
  }
};

// Start dev server
gulp.task('connect', function(){
  connect.server({
    root:['dist'],
    port: config.port,
    base: config.baseURL,
    liveReload: true
  });
});

gulp.task('open', ['connect'], function(){
  gulp.src('dist/index.html')
    .pipe(open({uri: config.baseURL + ':' + config.port + '/'}));
});

gulp.task('html', function(){
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

gulp.task('js', function(){
  browserify(config.paths.mainJS)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload());

});

gulp.task('css', function(){
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + '/css'));
});


gulp.task('watch', function(){
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js']);
});

gulp.task('default', ['html', 'js', 'css', 'open', 'watch']);
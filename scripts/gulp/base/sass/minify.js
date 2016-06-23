// Base :: Sass :: Default
'use strict';

var gulp = require('gulp');
var cssmin = require('../../pipes/cssmin');
var header = require('../../pipes/header');
var plumber = require('gulp-plumber');

gulp.task('sass-minify', function(callback) {
  return gulp.src(global.config.dest + '/seed.css')
    .pipe(plumber())
    .pipe(cssmin())
    .pipe(header())
    .pipe(gulp.dest(global.config.dest))
    .on('close', callback);
});
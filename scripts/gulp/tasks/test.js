// Tasks :: Test
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

// Default task
gulp.task('test', function(callback) {
  runSequence(
    'verify-dependencies',
    'lint',
    'sass-base',
    'sass-minify',
    callback
  );
});
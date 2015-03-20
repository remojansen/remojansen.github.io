"use strict";

var gulp        = require('gulp'),
    jshint      = require('gulp-jshint'),
    jsonlint    = require("gulp-jsonlint"),
    browserSync = require('browser-sync'),
    karma       = require("gulp-karma"),
    runSequence = require('run-sequence'),
    reload      = browserSync.reload;

gulp.task('jslint', function() {
  return gulp.src('./website/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('YOUR_REPORTER_HERE'));
});

gulp.task('jsonlint', function() {
  return gulp.src('./website/js/models/*.json')
             .pipe(jsonlint())
             .pipe(jsonlint.reporter());
});

gulp.task('lint', function (cb) {
  runSequence(['jslint', 'jsonlint'], cb);
});

gulp.task('test', function(cb) {
  gulp.src('./tests/**/**.test.js')
      .pipe(karma({
         configFile: 'karma.conf.js',
         action: 'run'
       }))
       .on('end', cb)
       .on('error', function(err) {
         // Make sure failed tests cause gulp to exit non-zero
         throw err;
       });
});

gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch([
      "website/js/**/**.js",
      "website/js/**/**.json",
      "website/js/**/**.hbs",
      "website/css/**/**.css",
      "website/css/**/**.css",
      "website/assets/**/**.png",
      "index.html"
    ], browserSync.reload, cb);
});

gulp.task('default', function (cb) {
  runSequence('lint', 'test', cb);
});

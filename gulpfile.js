"use strict";

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['browser-sync'], function (cb) {
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

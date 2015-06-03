"use strict";

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;

gulp.task('serve', function(cb) {
    browserSync({
        port: 8080,
        server: {
            baseDir: "./"
        }
    });

    gulp.watch([
      "./**/*.js",
      "./**/*.json",
      "./**/*.hbs",
      "./**/*.css",
      "./**/*.png",
      "./index.html"
    ], browserSync.reload, cb);
});

gulp.task('default', ['serve']);

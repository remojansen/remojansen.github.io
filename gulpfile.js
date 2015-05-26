"use strict";

var gulp        = require('gulp'),
    jshint      = require('gulp-jshint'),
    jsonlint    = require("gulp-jsonlint"),
    browserSync = require('browser-sync'),
    karma       = require('karma').server,
    uglify      = require('gulp-uglify'),
    runSequence = require('run-sequence'),
    rjs         = require('gulp-requirejs'),
    reload      = browserSync.reload;

gulp.task('jslint', function() {
  return gulp.src(['website/js/**/*.js', '!website/js/bundle.min.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('jsonlint', function() {
  return gulp.src('website/js/models/*.json')
             .pipe(jsonlint())
             .pipe(jsonlint.reporter());
});

gulp.task('lint', function (cb) {
  runSequence(['jslint', 'jsonlint'], cb);
});

gulp.task('test', function(cb) {
  karma.start({
    configFile : __dirname + '/karma.conf.js',
    singleRun : true
  }, cb);
});

gulp.task('bundle', function() {
    return rjs({
        baseUrl: './',
        waitSeconds: 45,
        name: 'website/js/main.js',
        out: 'bundle.min.js',
        shim: {
            Bootstrap: { deps: ['jQuery'], exports: 'Bootstrap' },
            Ember: { deps: ['jQuery', 'Handlebars', 'EmberTemplateCompiler'], exports: 'Ember' },
            Konami: { deps: ['jQuery'], exports: 'Konami' },
            prettify: { deps: ['jQuery'], exports: 'prettify' }
        },
        paths: {
            jQuery : "bower_components/jquery/dist/jquery.min",
            Bootstrap : "bower_components/bootstrap/dist/js/bootstrap.min",
            Handlebars: "bower_components/handlebars/handlebars.min",
            EmberTemplateCompiler : "bower_components/ember/ember-template-compiler",
            Ember : "bower_components/ember/ember.prod",
            text: "bower_components/requirejs-text/text",
            Konami: "bower_components/konami-js/konami",
            prettify : "bower_components/google-code-prettify/bin/prettify.min",
            slideout : "bower_components/slideout/dist/slideout.min",
            moment : "bower_components/moment/min/moment.min",
            bluebird : "bower_components/bluebird/js/browser/bluebird.min"
        },
    })
    .pipe(uglify())
    .pipe(gulp.dest('website/js/'));
});

gulp.task('serve', function(cb) {
    browserSync({
        port: 8080,
        server: {
            baseDir: "./"
        }
    });

    gulp.watch([
      "./website/js/**/*.js",
      "./website/js/**/*.json",
      "./website/js/**/*.hbs",
      "./website/css/**/*.css",
      "./website/css/**/*.css",
      "./website/assets/**/*.png",
      "./index.html"
    ], browserSync.reload, cb);
});

gulp.task('default', function (cb) {
  runSequence('lint', 'test', cb);
});

module.exports = function (config) {
    'use strict';
    config.set({
        basePath: './',
        frameworks: [ 'mocha', 'requirejs', 'chai', 'sinon' ],
        browsers: ['PhantomJS'],
        reporters: ['progress'],
        plugins : [
          'karma-mocha',
          'karma-requirejs',
          'karma-chai',
          'karma-sinon',
          'karma-phantomjs-launcher'
        ],
        files : [
          { pattern: 'test/test-main.js', included: true },
          { pattern: "website/js/**/*.js", included: false },
          { pattern: "test/**/**.test.js", included: false },
          { pattern: "bower_components/jquery/dist/jquery.min.js", included: false },
          { pattern: "bower_components/bootstrap/dist/js/bootstrap.min.js", included: false },
          { pattern: "bower_components/handlebars/handlebars.min.js", included: false },
          { pattern: "bower_components/ember/ember-template-compiler.js", included: false },
          { pattern: "bower_components/ember/ember.prod.js", included: false },
          { pattern: "bower_components/requirejs-text/text.js", included: false },
          { pattern: "bower_components/konami-js/konami.js", included: false },
          { pattern: "bower_components/moment/min/moment.min.js", included: false },
          { pattern: "bower_components/google-code-prettify/bin/prettify.min.js", included: false },
          { pattern: "bower_components/slideout/dist/slideout.min.js", included: false },
          { pattern: "bower_components/bluebird/js/browser/bluebird.min.js", included: false }
        ],
        exclude: [
    			'website/js/main.js',
          'website/js/require.config.js',
          'website/js/404.js'
    		],
        logLevel: config.LOG_INFO
    });
};

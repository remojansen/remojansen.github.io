var tests = [];
for (var file in window.__karma__.files) {
    if (/test\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    baseUrl: './base/',
    waitSeconds: 45,
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
        Ember : "bower_components/ember/ember.debug",
        text: "bower_components/requirejs-text/text",
        Konami: "bower_components/konami-js/konami",
        prettify : "bower_components/google-code-prettify/bin/prettify.min",
        slideout : "bower_components/slideout/dist/slideout.min",
        moment : "bower_components/moment/min/moment.min"
    },
    // set cache off (disable in production)
    urlArgs: 'bust=' + (new Date()).getTime(),
    // ask Require.js to load these files (all our tests)
    deps: tests,
    // start test run, once Require.js is done
    callback: window.__karma__.start
});

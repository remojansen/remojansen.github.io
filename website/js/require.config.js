require.config({
    baseUrl: './',
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
        EmberTemplateCompiler : 'bower_components/ember/ember-template-compiler',
        Ember : "bower_components/ember/ember.debug",
        text: "bower_components/requirejs-text/text",
        Konami: "bower_components/konami-js/konami",
        prettify : "bower_components/google-code-prettify/bin/prettify.min",
        slideout : "bower_components/slideout/dist/slideout.min",
        moment : "bower_components/moment/min/moment.min"
    },
    urlArgs: 'bust=' + (new Date()).getTime() // set cache off (disable in production)
});

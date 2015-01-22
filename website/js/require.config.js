require.config({
    baseUrl: './',
    waitSeconds: 45,
    shim: {
        Bootstrap: { deps: ['jQuery'], exports: 'Bootstrap' },
        Ember: { deps: ['jQuery', 'Handlebars'], exports: 'Ember' },
        Konami: { deps: ['jQuery'], exports: 'Konami' },
        prettify: { deps: ['jQuery'], exports: 'prettify' }
    },
    paths: {
        jQuery : "bower_components/jquery/dist/jquery.min",
        Bootstrap : "bower_components/bootstrap/dist/js/bootstrap.min",
        Handlebars: "bower_components/handlebars/handlebars.min",
        Ember : "bower_components/ember/ember",
        text: "bower_components/requirejs-text/text",
        Konami: "bower_components/konami-js/konami",
        prettify : "bower_components/google-code-prettify/bin/prettify.min"
    },
    urlArgs: 'bust=' + (new Date()).getTime() // set cache off (disable in production)
});
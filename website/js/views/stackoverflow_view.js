define([
    'Ember',
    'text!website/js/templates/stackoverflow.hbs',
    'website/js/utils',
    'prettify'
],
    function (Ember, template, utils) {
        "use strict";

        return Ember.View.extend({
            defaultTemplate: Ember.Handlebars.compile(template),
            didInsertElement: function () {
                this._super();
                Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
            },
            afterRenderEvent: function () {
                utils.hideMobileNavigationMenu();

                // center post imgs
                $('.post-body img').wrap('<div style="text-align: center;"/>');
                $('.post-body img').css('max-height','500px');

                // Make tables looks better
                $('.post-body table').addClass('table table-bordered table-striped table-responsive');

                // Escape HTML inside code examples and make them look better
                $('.post-body code').each(function(index, item){
                    $(item).parent().addClass('prettyprint linenums lang-js');
                    //var html = $(item).html();
                    //$(item).text(html);
                });
                prettyPrint();
            }
        });
    }
);

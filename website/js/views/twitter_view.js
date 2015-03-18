define([
    'Ember',
    'text!website/js/templates/twitter.hbs',
    'website/js/utils'
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
                $('.tweet-body img').wrap('<div style="text-align: center;"/>');
                $('.tweet-body img').css('max-height','500px');
            }
        });
    }
);

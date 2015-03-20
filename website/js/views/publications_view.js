define([
    'Ember',
    'text!website/js/templates/publications.hbs',
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
            }
        });
    }
);

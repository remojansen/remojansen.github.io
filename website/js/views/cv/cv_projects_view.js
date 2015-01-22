define([
    'Ember',
    'text!website/js/templates/cv/projects.hbs',
],
    function (Ember, template) {
        "use strict";

        return Ember.View.extend({
            defaultTemplate: Ember.Handlebars.compile(template),
            didInsertElement: function () {
                this._super();
                Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
            },
            afterRenderEvent: function () {

            }
        });
    }
);
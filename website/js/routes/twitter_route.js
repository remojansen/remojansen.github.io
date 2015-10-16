define([
    'Ember',
    'moment',
    'bluebird',
    'website/js/routes/async_loader'
],
    function (Ember, moment, Promise, asyncLoader) {
        "use strict";

        return Ember.Route.extend({
          model: function()
          {
            return asyncLoader.getTwitterFeedPromise();
          }
        });
    }
);

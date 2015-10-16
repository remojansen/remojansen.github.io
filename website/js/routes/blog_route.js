define([
    'Ember', 'bluebird', 'website/js/routes/async_loader'
],
    function (Ember, Promise, asyncLoader) {
        "use strict";

        return Ember.Route.extend({
          model: function()
          {
            return asyncLoader.getBlogFeedPromise();
          }
        });
    }
);

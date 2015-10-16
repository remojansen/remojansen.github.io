define([
    'Ember', 'bluebird', 'moment', 'website/js/routes/async_loader'
],
    function (Ember, Promise, moment, asyncLoader) {
        "use strict";

        return Ember.Route.extend({
          model: function()
          {
            return asyncLoader.getGitHubFeedPromise();
          }
        });
    }
);

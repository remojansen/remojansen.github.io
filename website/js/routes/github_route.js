define([
    'Ember', 'bluebird'
],
    function (Ember, Promise) {
        "use strict";

        return Ember.Route.extend({
          model: function()
          {
            return new Promise(function(resolve, reject) {
              $.ajax({
                async: true,
                dataType: "json",
                type: 'GET',
                url: 'http://pipes.yahoo.com/pipes/pipe.run',
                data : {
                  '_id' : '2d41b5bdc1a7f250df50879be8604500',
                  '_render' : ' json'
                },
                success: function(data) {
                  var result = {};
                  result.item = data.value.items;
                  resolve(result);
                },
                error: function() {
                  reject(error);
                }
              });
            });
          }
        });
    }
);

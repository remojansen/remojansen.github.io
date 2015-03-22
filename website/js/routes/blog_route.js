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
                  type: 'GET',
                  url: 'http://pipes.yahoo.com/pipes/pipe.run',
                  data : {
                    '_id' : 'f4755f1210a751123ce6eaf70e5fd268',
                    '_render' : ' json'
                  },
                  async: true,
                  dataType: "json",
                  success: function(data) {
                    var result = {};
                    result.post = data.value.items;
                    resolve(result);
                  },
                  error: function(error) {
                    reject(error);
                  }
                });
              });
            }
        });
    }
);

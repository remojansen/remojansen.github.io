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
                    ype: 'GET',
                    dataType: "json",
                    url: 'http://pipes.yahoo.com/pipes/pipe.run',
                    data : {
                      '_id' : 'e281899472e8587bf15c31cb2e3adf15',
                      '_render' : ' json'
                    },
                    success: function(data){
                      var result = {};
                      result.item = data.value.items;
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

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
                    url: './website/js/models/publications.json',
                    success: function(data){
                      var result = {};
                      result.publications = data;
                      resolve(result);
                    },
                    error : function(error){
                      reject(reject);
                    }
                });

              });
            }
        });
    }
);

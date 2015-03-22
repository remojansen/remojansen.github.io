define([
    'Ember', 'bluebird', 'moment'
],
    function (Ember, Promise, moment) {
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
                  for(var i = 0; i < result.item.length; i++){
                    var date = result.item[i].published;
                    date = moment(date).format("dddd, MMMM Do YYYY");
                    result.item[i].published = date;
                  }
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

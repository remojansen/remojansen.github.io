define([
    'Ember',
    'website/js/lib/twitter-entities'
],
    function (Ember, twitterEntities) {
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
                    '_id' : 'd3b21840e155e327bdfd8ac11ff6f91e',
                    '_render' : ' json'
                  },
                  success: function(data) {
                    var result = {};
                    result.item = data.value.items[0].item;
                    for(var i = 0; i < result.item.length; i++){
                      result.item[i] = twitterEntities.linkifyEntities(result.item[i]);
                    }
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

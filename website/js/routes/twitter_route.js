define([
    'Ember',
    'moment',
    'website/js/lib/twitter-entities'
],
    function (Ember, moment, twitterEntities) {
        "use strict";

        return Ember.Route.extend({
            renderTemplate: function() {
              this.render({
                outlet: "main"
              });
            },
            model: function()
            {
                var result = {};

                $.ajax({
                    async: false,
                    dataType: "json",
                    url: 'http://pipes.yahoo.com/pipes/pipe.run?_id=d3b21840e155e327bdfd8ac11ff6f91e&_render=json',
                    success: function(data) {
                        result.item = data.value.items[0].item;
                        for(var i = 0; i < result.item.length; i++){
                          result.item[i] = twitterEntities.linkifyEntities(result.item[i]);
                        }
                    },
                    error: function() {
                        result.item = [];
                    }
                });

                return result;
            }
        });
    }
);

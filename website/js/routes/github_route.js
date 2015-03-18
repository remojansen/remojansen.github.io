define([
    'Ember'
],
    function (Ember) {
        "use strict";

        return Ember.Route.extend({
            model: function()
            {
                var result = {};

                $.ajax({
                    async: false,
                    dataType: "json",
                    url: 'http://pipes.yahoo.com/pipes/pipe.run?_id=2d41b5bdc1a7f250df50879be8604500&_render=json',
                    success: function(data){
                        result.item = data.value.items;
                    },
                    error: function(){
                        result.item = [];
                    }
                });

                return result;
            }
        });
    }
);

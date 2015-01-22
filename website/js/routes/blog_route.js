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
                    url: 'http://pipes.yahoo.com/pipes/pipe.run?_id=f4755f1210a751123ce6eaf70e5fd268&_render=json',
                    success: function(data){
                        result.post = data.value.items;
                    },
                    error: function(){
                        result.post = [];
                    }
                });

                return result;
            }
        });
    }
);
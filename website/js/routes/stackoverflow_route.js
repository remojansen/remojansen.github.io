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
                    url: 'http://pipes.yahoo.com/pipes/pipe.run?_id=e281899472e8587bf15c31cb2e3adf15&_render=json',
                    success: function(data){
                        result.item = data.value.items;
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

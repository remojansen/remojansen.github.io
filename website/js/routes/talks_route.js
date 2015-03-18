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
                    url: './website/js/models/talks.json',
                    success: function(data){
                        result.talks = data;
                    }
                });

                return result;
            }
        });
    }
);

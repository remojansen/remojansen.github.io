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
                    url: './website/js/models/portfolio.json',
                    success: function(data){
                        result.portfolio = data;
                    }
                });

                return result;
            }
        });
    }
);
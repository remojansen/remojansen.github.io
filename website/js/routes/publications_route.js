define([
    'Ember'
],
    function (Ember) {
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
                    url: './website/js/models/publications.json',
                    success: function(data){
                        result.publications = data;
                    }
                });

                return result;
            }
        });
    }
);

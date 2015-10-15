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
                  url : 'http://my-cors-proxy.azurewebsites.net/github.com/remojansen.atom',
                  crossDomain : true,
                  dataType: "xml",
                  success: function(xml) {
                    var items = [];
                    var $items = $(xml).find("entry");
                    for(var i = 0; i < $items.length; i++) {
                      var $item = $($items[i]);
                      items .push({
                        link: $item.find("link").attr("href"),
                        published : moment($item.find("published").text()).format("dddd, MMMM Do YYYY"),
                        title : $item.find("title").text()
                      });
                    }
                    var result = { item : items };
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

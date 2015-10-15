define([
    'Ember', 'bluebird'
],
    function (Ember, Promise) {
        "use strict";

        return Ember.Route.extend({
          model: function()
          {
            return new Promise(function(resolve, reject) {

              $.ajax({
                  async: true,
                  url : 'http://my-cors-proxy.azurewebsites.net/blog.wolksoftware.com/feed',
                  crossDomain : true,
                  dataType: "xml",
                  success: function(xml) {
                    var items = [];
                    var $items = $(xml).find("entry");
                    for(var i = 0; i < $items.length; i++) {
                      var $item = $($items[i]);

                      items .push({
                        link: $item.find("link").attr("href"),
                        description : $item.find("content").text(),
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

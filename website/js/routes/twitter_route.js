define([
    'Ember',
    'moment',
    'bluebird'
],
    function (Ember, moment, Promise) {
        "use strict";

        return Ember.Route.extend({
          model: function()
          {
            return new Promise(function(resolve, reject) {

              $.ajax({
                  async: true,
                  url : 'http://my-cors-proxy.azurewebsites.net/twitrss.me/twitter_user_to_rss/?user=ower_reloaded',
                  crossDomain : true,
                  dataType: "xml",
                  success: function(xml) {
                    var items = [];
                    var $items = $(xml).find("item");
                    for(var i = 0; i < $items.length; i++) {
                      var $item = $($items[i]);
                      var link = $item.find("link").text();
                      var id = link.split("/")[5];
                      items .push({
                        link : link,
                        id : id,
                        pubDate : moment($item.find("pubDate").text()).format("dddd, MMMM Do YYYY"),
                        description : $item.find("title").text(),
                        fav_link : "https://twitter.com/intent/favorite?tweet_id=" + id,
                        retweet_link : "https://twitter.com/intent/tweet?in_reply_to=" + id,
                        reply_link : "https://twitter.com/intent/retweet?tweet_id=" + id
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

define([
    'bluebird',
    'moment'
], function (Ember, Promise, moment) {
  "use strict";

  function AsyncLoader(){}

  AsyncLoader.CAHE = {
    blog : null;
    so : null,
    github : null,
    twitter : null
  };

  AsyncLoader.prototype.getGitHubFeedPromise = function() {
    return new Promise(function(resolve, reject) {
      if(AsyncLoader.CACHE.github !== null) {
        resolve(cache);
      }
      else {
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
              AsyncLoader.CACHE.github ={ item : items };
              resolve(AsyncLoader.CACHE.github);
            },
            error: function(error) {
              reject(error);
            }
        });
      }
    });
  };

  AsyncLoader.prototype.getSoFeedPromise = function() {
    return new Promise(function(resolve, reject) {
      if(AsyncLoader.CACHE.so !== null) {
        resolve(cache);
      }
      else {
        $.ajax({
            async: true,
            url : 'http://my-cors-proxy.azurewebsites.net/stackoverflow.com/feeds/user/606821',
            crossDomain : true,
            dataType: "xml",
            success: function(xml) {
              var items = [];
              var $items = $(xml).find("entry");
              for(var i = 0; i < $items.length; i++) {
                var $item = $($items[i]);
                items .push({
                  id : $item.find("id").text(),
                  content : $item.find("summary").text(),
                  title : $item.find("title").text()
                });
              }
              var AsyncLoader.CACHE.so = { item : items };
              resolve(AsyncLoader.CACHE.so);
            },
            error: function(error) {
              reject(error);
            }
        });
      }
    });
  };

  AsyncLoader.prototype.getBlogFeedPromise = function() {
    return new Promise(function(resolve, reject) {
      if(AsyncLoader.CACHE.blog !== null) {
        resolve(cache);
      }
      else {
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
              AsyncLoader.CACHE.blog = { item : items };
              resolve(AsyncLoader.CACHE.blog);
            },
            error: function(error) {
              reject(error);
            }
        });
      }
    });
  };

  AsyncLoader.prototype.getTwitterFeedPromise = function() {
    return new Promise(function(resolve, reject) {
      if(AsyncLoader.CACHE.twitter !== null) {
        resolve(cache);
      }
      else {
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
              syncLoader.CACHE.twitter = { item : items };
              resolve(syncLoader.CACHE.twitter);
            },
            error: function(error) {
              reject(error);
            }
        });
      }
    });
  };

  window._loader =  window._loader || new AsyncLoader();
  return window._loader;
});

define([
    'bluebird',
    'moment'
], function (Promise, moment) {
  "use strict";

  function AsyncLoader() {
    window._cache = window._cache || {
      blog : null,
      so : null,
      github : null,
      twitter : null
    };
    this.CACHE = window._cache;
  }

  AsyncLoader.prototype.getGitHubFeedPromise = function() {
    var that = this;
    return new Promise(function(resolve, reject) {
      if(that.CACHE.github !== null) {
        resolve(that.CACHE.github);
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
              that.CACHE.github ={ item : items };
              resolve(that.CACHE.github);
            },
            error: function(error) {
              reject(error);
            }
        });
      }
    });
  };

  AsyncLoader.prototype.getSoFeedPromise = function() {
    var that = this;
    return new Promise(function(resolve, reject) {
      if(that.CACHE.so !== null) {
        resolve(that.CACHE.so);
      }
      else {
        $.ajax({
            async: true,
            url : 'http://my-cors-proxy.azurewebsites.net/feeds.feedburner.com/UserRemoHJansen-StackOverflow?fmt=xml',
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
              that.CACHE.so = { item : items };
              resolve(that.CACHE.so);
            },
            error: function(error) {
              reject(error);
            }
        });
      }
    });
  };

  AsyncLoader.prototype.getBlogFeedPromise = function() {
    var that = this;
    return new Promise(function(resolve, reject) {
      if(that.CACHE.blog !== null) {
        resolve(that.CACHE.blog);
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
              that.CACHE.blog = { item : items };
              resolve(that.CACHE.blog);
            },
            error: function(error) {
              reject(error);
            }
        });
      }
    });
  };

  AsyncLoader.prototype.getTwitterFeedPromise = function() {
    var that = this;
    return new Promise(function(resolve, reject) {
      if(that.CACHE.twitter !== null) {
        resolve(that.CACHE.twitter);
      }
      else {
        $.ajax({
            async: true,
            url : 'http://my-cors-proxy.azurewebsites.net/twitrss.me/twitter_user_to_rss/?user=RemoHJansen',
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
              that.CACHE.twitter = { item : items };
              resolve(that.CACHE.twitter);
            },
            error: function(error) {
              reject(error);
            }
        });
      }
    });
  };

  return new AsyncLoader();
});

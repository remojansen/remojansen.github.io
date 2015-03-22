define([
  'moment',
  'jQuery'
  ], function (moment) {
    "use strict";

    var twitterEntities = {
      escapeHTML : function (text) {
          return $('<div/>').text(text).html();
      },
      linkifyEntities : function (tweet) {
          tweet.pubDate = moment(tweet.pubDate).format("dddd, MMMM Do YYYY");
          var id = tweet.link.split("/")[5];
          tweet.fav_link = "https://twitter.com/intent/favorite?tweet_id=" + id;
          tweet.reply_link = "https://twitter.com/intent/tweet?in_reply_to=" + id;
          tweet.retweet_link = "https://twitter.com/intent/retweet?tweet_id=" + id;

          return tweet;
      }
    };

    return twitterEntities;
});

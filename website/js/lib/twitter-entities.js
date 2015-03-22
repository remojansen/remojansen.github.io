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
          return tweet;
      }
    };

    return twitterEntities;
});

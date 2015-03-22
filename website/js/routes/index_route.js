define([
    'Ember',
    'bluebird'
    ],
    function (Ember, Promise) {
      "use strict";

      function LoadDataAsync(url){
        return new Promise(function(resolve, reject) {
          $.ajax({
            async: true,
            dataType: "json",
            url: url,
            success: function(response){
              resolve(response);
            },
            error : function(error) {
              reject(error);
            }
          });
        });
      }

      function loadCvAsync(){
        return new Promise(function(resolve, reject) {

          Promise.join(
            LoadDataAsync('./website/js/models/summary.json'),
            LoadDataAsync('./website/js/models/work.json'),
            LoadDataAsync('./website/js/models/awards.json'),
            LoadDataAsync('./website/js/models/education.json'),
            LoadDataAsync('./website/js/models/additional_info.json'),
            LoadDataAsync('./website/js/models/projects.json'),
            LoadDataAsync('./website/js/models/skills.json'),
            LoadDataAsync('./website/js/models/recommendations.json'),
            LoadDataAsync('./website/js/models/self_education.json'),
            function(summary, work, awards, education, additional_info,
              projects, skills, recommendations, self_education) {

                try {
                  // split self education in 2 groups
                  var half = (self_education.book.length / 2),
                      bookGroupA = [],
                      bookGroupB = [],
                      i = 0;

                  for(i = 0; i < self_education.book.length; i++) {
                    if(i <= half) {
                      bookGroupA.push(self_education.book[i]);
                    }
                    else {
                      bookGroupB.push(self_education.book[i]);
                    }
                  }

                  // set resu;t
                  var result = {
                    summary : summary,
                    work : work,
                    awards : awards,
                    education : education,
                    additional_info : additional_info,
                    projects : projects,
                    skills : skills,
                    recommendations : recommendations,
                    self_education : self_education
                  };

                  result.self_education.bookGroupA = bookGroupA;
                  result.self_education.bookGroupB = bookGroupB;

                  resolve(result);
              }
              catch(error) {
                reject(error);
              }
          });

        });
      }

      return Ember.Route.extend({
        model: function(){
          return loadCvAsync();
        }
      });

});

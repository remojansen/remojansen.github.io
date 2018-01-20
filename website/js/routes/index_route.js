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

      const promises = [
        LoadDataAsync('./website/js/models/summary.json'),
        LoadDataAsync('./website/js/models/work.json'),
        LoadDataAsync('./website/js/models/awards.json'),
        LoadDataAsync('./website/js/models/education.json'),
        LoadDataAsync('./website/js/models/projects.json'),
        LoadDataAsync('./website/js/models/skills.json'),
        LoadDataAsync('./website/js/models/recommendations.json'),
        LoadDataAsync('./website/js/models/self_education.json')
      ];

      function loadCvAsync(){
        return new Promise(function(resolve, reject) {

          Promise.all(promises).then(function (values) {

            const summary = values[0],
                  work = values[1],
                  awards = values[2],
                  education = values[3],
                  projects = values[4],
                  skills = values[5],
                  recommendations = values[6],
                  self_education = values[7];

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
        model: function() {
          return loadCvAsync();
        }
      });

});

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
                    url: './website/js/models/summary.json',
                    success: function(data){
                        result.summary = data;
                    }
                });

                $.ajax({
                    async: false,
                    dataType: "json",
                    url: './website/js/models/work.json',
                    success: function(data){
                        result.work = data;
                    }
                });

                $.ajax({
                    async: false,
                    dataType: "json",
                    url: './website/js/models/awards.json',
                    success: function(data){
                        result.awards = data;
                    }
                });

                $.ajax({
                    async: false,
                    dataType: "json",
                    url: './website/js/models/education.json',
                    success: function(data){
                        result.education = data;
                    }
                });

                $.ajax({
                    async: false,
                    dataType: "json",
                    url: './website/js/models/additional_info.json',
                    success: function(data){
                        result.additional_info = data;
                    }
                });

                $.ajax({
                    async: false,
                    dataType: "json",
                    url: './website/js/models/projects.json',
                    success: function(data){
                        result.projects = data;
                    }
                });

                $.ajax({
                    async: false,
                    dataType: "json",
                    url: './website/js/models/skills.json',
                    success: function(data){
                        result.skills = data;
                    }
                });

                $.ajax({
                    async: false,
                    dataType: "json",
                    url: './website/js/models/recommendations.json',
                    success: function(data){
                        result.recommendations = data;
                    }
                });

                $.ajax({
                    async: false,
                    dataType: "json",
                    url: './website/js/models/self_education.json',
                    success: function(data){

                        var half = (data.book.length / 2),
                            bookGroupA = [],
                            bookGroupB = [],
                            i = 0;

                        for(i = 0; i < data.book.length; i++) {
                          if(i <= half) {
                            bookGroupA.push(data.book[i]);
                          }
                          else {
                            bookGroupB.push(data.book[i]);
                          }
                        }
                        
                        result.self_education = data;
                        result.self_education.bookGroupA = bookGroupA;
                        result.self_education.bookGroupB = bookGroupB;
                    }
                });

                return result;
            }
        });
    }
);

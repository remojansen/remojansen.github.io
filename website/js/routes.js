define([],
    function () {
        "use strict";

        return function () {
            this.resource('portfolio');
            this.resource('blog');
            this.resource('stackoverflow');
            this.resource('github');
            this.resource('talks');
            this.resource('publications');
            this.resource('twitter');
        };
    });

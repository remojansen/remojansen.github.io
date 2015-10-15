define([
    'Ember',
    'text!website/js/templates/blog.hbs',
    'website/js/utils',
    'prettify'
],
    function (Ember, template, utils) {
        "use strict";

        function htmlDecode(i){
          var e = document.createElement('div');
          e.innerHTML = i;
          return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
        }

        return Ember.View.extend({
            defaultTemplate: Ember.Handlebars.compile(template),
            didInsertElement: function () {
                this._super();
                Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
            },
            afterRenderEvent: function () {
                utils.hideMobileNavigationMenu();

                // center post imgs
                $('.post-body img').wrap('<div style="text-align: center;"/>');
                $('.post-body img').css('max-height','500px');

                // Make tables looks better
                $('.post-body table').addClass('table table-bordered table-striped table-responsive');

                // Mmake code snippets look better
                $('.post-body code').each(function(index, item){
                    $(item).parent().addClass('prettyprint linenums lang-js');
                    //var html = $(item).html();
                    //$(item).text(html);
                });
                prettyPrint();
            }
        });
    }
);

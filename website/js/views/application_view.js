define([
    'Ember',
    'text!website/js/templates/application.hbs',
    'Konami',
    'website/js/utils',
],
    function (Ember, template, Konami, utils) {
        "use strict";

        return Ember.View.extend({
            defaultTemplate: Ember.Handlebars.compile(template),
            didInsertElement: function () {
                this._super();
                Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
            },
            afterRenderEvent: function () {
                var that = this;
                that.easterEgg();
                utils.initializeSlideout();
            },
            easterEgg : function () {
                var easter_egg, SECRET_WITH, SECRET_HEIGHT;

                easter_egg = new Konami();
                SECRET_WITH = 295;
                SECRET_HEIGHT = 281;

                easter_egg.code = function () {
                    var window_width = window.innerWidth;
                    var position_x = (window_width  / 2) - (SECRET_WITH / 2);
                    if(window_width < 600)	{
                        position_x = (window_width  / 2) - (SECRET_WITH / 4);
                        var scaled_x = (SECRET_WITH / 4);
                        var scaled_y = (SECRET_HEIGHT / 4);
                        $('.animation').css('width', scaled_x + 'px');
                        $('.animation').css('height', scaled_y + 'px');
                        $('.animation').css('background-size','cover');
                        $('.easterEgg p').css('padding-top','150px');
                        $('.easterEgg p').css('font-size','15px');
                    }
                    $('.animation').css('left', position_x + 'px');
                    $('.closeeasterEgg').click(function(){ $('.easterEgg').fadeOut(); });
                    $('.easterEgg').fadeIn();
                };

                easter_egg.load();
            }
        });
    }
);

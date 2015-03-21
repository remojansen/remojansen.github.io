define(['slideout'], function (Slideout) {
  "use strict";

  return {
      hideMobileNavigationMenu: function () {
        if ($('.navbar-toggle').is(':visible') && $('.navbar-collapse').is(':visible')) {
          $('.navbar-toggle').trigger('click');
        }
      },
      initializeSlideout: function() {
        var slideout = new Slideout({
          'panel': document.getElementById('panel'),
          'menu': document.getElementById('menu'),
          'padding': 256,
          'tolerance': 70
        });

        $('.navbar-brand').on('click', function(){
          slideout.toggle();
        });
      }
  };
});

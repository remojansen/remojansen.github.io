define([], function () {
    "use strict";

    return {
        hideMobileNavigationMenu: function () {
            if ($('.navbar-toggle').is(':visible') && $('.navbar-collapse').is(':visible')) {
                $('.navbar-toggle').trigger('click');
            }
        }
    };
});
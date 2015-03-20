define(['Ember'], function (Ember) {
    "use strict";

    return window.app = Ember.Application.create({
      LOG_TRANSITIONS: true, // basic logging of successful transitions
      LOG_TRANSITIONS_INTERNAL: true, // detailed logging of all routing steps
      LOG_VIEW_LOOKUPS: true // detailed logging of view resolution
    });
});

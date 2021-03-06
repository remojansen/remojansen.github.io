define(['Ember'], function (Ember) {
    "use strict";

    window.app = Ember.Application.create({
      LOG_TRANSITIONS: false, // basic logging of successful transitions
      LOG_TRANSITIONS_INTERNAL: false, // detailed logging of all routing steps
      LOG_VIEW_LOOKUPS: false // detailed logging of view resolution
    });

    // Delay the app's initialization . We will invoke advanceReadiness()
    // when are ready for the app to be initialized
    window.app.deferReadiness();

    return window.app;
});

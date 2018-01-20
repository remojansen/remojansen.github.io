define([],
  function () {
    "use strict";

    return function () {
      this.resource('portfolio', { path: '/portfolio' });
      this.resource('publications', { path: '/publications' });
      this.resource('talks', { path: '/talks' });  
    };
});

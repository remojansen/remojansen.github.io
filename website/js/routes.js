define([],
  function () {
    "use strict";

    return function () {
      this.resource('portfolio', { path: '/portfolio' });
      this.resource('publications', { path: '/publications' });
      this.resource('talks', { path: '/talks' });
      this.resource('blog', { path: '/blog' });
      this.resource('github', { path: '/github' });
      this.resource('stackoverflow', { path: '/stackoverflow' });
      this.resource('twitter', { path: '/twitter' });  
    };
});

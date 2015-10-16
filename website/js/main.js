require([
    'website/js/app',
    'website/js/routes',
    'website/js/routes/index_route',
    'website/js/routes/portfolio_route',
    'website/js/routes/blog_route',
    'website/js/routes/stackoverflow_route',
    'website/js/routes/talks_route',
    'website/js/routes/publications_route',
    'website/js/routes/github_route',
    'website/js/routes/twitter_route',
    'website/js/views/index_view',
    'website/js/views/application_view',
    'website/js/views/portfolio_view',
    'website/js/views/blog_view',
    'website/js/views/stackoverflow_view',
    'website/js/views/talks_view',
    'website/js/views/publications_view',
    'website/js/views/github_view',
    'website/js/views/twitter_view',
    'website/js/routes/async_loader',
    'jQuery',
    'Bootstrap',
    'Handlebars',
    'Ember'
], function (
  app,
  routes,
  indexRoute,
  portfolioRoute,
  blogRoute,
  stackoverflowRoute,
  talksRoute,
  publicationsRoute,
  githubRoute,
  twitterRoute,
  indexView,
  applicationView,
  portfolioView,
  blogView,
  stackoverflowView,
  talksView,
  publicationsView,
  githubView,
  twitterView,
  asyncLoader
  ){
    "use strict";

    // pre load feeds
    var f  = function(d){ console.log(d); }
    var e  = function(e){ console.log(e); }
    var promises = [];
    promises.push(asyncLoader.getGitHubFeedPromise());
    promises.push(asyncLoader.getSoFeedPromise());
    promises.push(asyncLoader.getTwitterFeedPromise());
    promises.push(asyncLoader.getBlogFeedPromise());

    for(var i = 0; i < promises.length; i++) {
      var p = promises[i];
      p(f,e);
    }

    // Configure Routes
    app.Router.map(routes);

    // Configure Routes
    app.IndexRoute = indexRoute;
    app.PortfolioRoute = portfolioRoute;
    app.BlogRoute = blogRoute;
    app.StackoverflowRoute = stackoverflowRoute;
    app.TalksRoute = talksRoute;
    app.PublicationsRoute = publicationsRoute;
    app.GithubRoute = githubRoute;
    app.TwitterRoute = twitterRoute;

    // Configure Views
    app.IndexView = indexView;
    app.ApplicationView = applicationView;
    app.PortfolioView = portfolioView;
    app.BlogView = blogView;
    app.StackoverflowView = stackoverflowView;
    app.TalksView = talksView;
    app.PublicationsView = publicationsView;
    app.GithubView = githubView;
    app.TwitterView = twitterView;

    // We're ready to launch the app!
    app.advanceReadiness();

    $('.loader').hide();
});

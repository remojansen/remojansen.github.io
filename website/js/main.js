require([
    'website/js/app',
    'website/js/routes',
    'website/js/routes/index_route',
    'website/js/routes/portfolio_route',
    'website/js/routes/talks_route',
    'website/js/routes/publications_route',
    'website/js/views/index_view',
    'website/js/views/application_view',
    'website/js/views/portfolio_view',
    'website/js/views/talks_view',
    'website/js/views/publications_view',
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
  talksRoute,
  publicationsRoute,
  indexView,
  applicationView,
  portfolioView,
  talksView,
  publicationsView,
  asyncLoader
  ){
    "use strict";

    window.onerror = function (error) {
        debugger;
    };

    // Configure Routes
    app.Router.map(routes);

    // Configure Routes
    app.IndexRoute = indexRoute;
    app.PortfolioRoute = portfolioRoute;
    app.TalksRoute = talksRoute;
    app.PublicationsRoute = publicationsRoute;

    // Configure Views
    app.IndexView = indexView;
    app.ApplicationView = applicationView;
    app.PortfolioView = portfolioView;
    app.TalksView = talksView;
    app.PublicationsView = publicationsView;

    // We're ready to launch the app!
    app.advanceReadiness();

    $('.loader').hide();
});

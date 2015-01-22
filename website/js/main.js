require([
    'website/js/app',
    'website/js/routes',
    'website/js/routes/index_route',
    'website/js/routes/portfolio_route',
    'website/js/routes/blog_route',
    'website/js/views/index_view',
    'website/js/views/application_view',
    'website/js/views/portfolio_view',
    'website/js/views/blog_view',
    'jQuery',
    'Bootstrap',
    'Handlebars',
    'Ember'
],
    function (app,
              routes,
              indexRoute,
              portfolioRoute,
              blogRoute,
              indexView,
              applicationView,
              portfolioView,
              blogView
        )
    {
        "use strict";

        // Configure Routes
        app.Router.map(routes);

        // Configure Routes
        app.IndexRoute = indexRoute;
        app.PortfolioRoute = portfolioRoute;
        app.BlogRoute = blogRoute;


        // Configure Views
        app.IndexView = indexView;
        app.ApplicationView = applicationView;
        app.PortfolioView = portfolioView;
        app.BlogView = blogView;

        // We're ready to launch the app!
        app.advanceReadiness();
    }
);
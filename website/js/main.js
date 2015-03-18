require([
    'website/js/app',
    'website/js/routes',
    'website/js/routes/index_route',
    'website/js/routes/portfolio_route',
    'website/js/routes/blog_route',
    'website/js/routes/stackoverflow_route',
    'website/js/routes/github_route',
    'website/js/routes/twitter_route',
    'website/js/views/index_view',
    'website/js/views/application_view',
    'website/js/views/portfolio_view',
    'website/js/views/blog_view',
    'website/js/views/stackoverflow_view',
    'website/js/views/github_view',
    'website/js/views/twitter_view',
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
              stackoverflowRoute,
              githubRoute,
              twitterRoute,
              indexView,
              applicationView,
              portfolioView,
              blogView,
              stackoverflowView,
              githubView,
              twitterView
        )
    {
        "use strict";

        // Configure Routes
        app.Router.map(routes);

        // Configure Routes
        app.IndexRoute = indexRoute;
        app.PortfolioRoute = portfolioRoute;
        app.BlogRoute = blogRoute;
        app.StackoverflowRoute = stackoverflowRoute;
        app.GithubRoute = githubRoute;
        app.TwitterRoute = twitterRoute;

        // Configure Views
        app.IndexView = indexView;
        app.ApplicationView = applicationView;
        app.PortfolioView = portfolioView;
        app.BlogView = blogView;
        app.StackoverflowView = stackoverflowView;
        app.GithubView = githubView;
        app.TwitterView = twitterView;

        // We're ready to launch the app!
        app.advanceReadiness();
    }
);

/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'hisight',
    environment: environment,
    podModulePrefix: 'hisight/pods',
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.apiHost = 'http://localhost:3000/';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';
    ENV.apiHost = null;

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.apiHost = 'https://api.hisight.io/';
  }

  ENV['simple-auth'] = {
    routeAfterAuthentication: 'app.dashboard',
    authorizer: 'simple-auth-authorizer:oauth2-bearer',
    crossOriginWhitelist: [ '*', ENV.apiHost ]
  };

  ENV['simple-auth-oauth2'] = {
    serverTokenEndpoint:  ENV.apiHost + '/oauth/token',
  };

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'img-src': "'self' avatars1.githubusercontent.com gravatar.com",
    'style-src': "'self' 'unsafe-inline'",
    'font-src': "*",
    'report-uri': "'self'",
    'connect-src': ENV.apiHost
  };

  return ENV;
};

/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'mir',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    fastboot: {
      hostWhitelist: [
        'mirai.audio',
        'api.mirai.audio',
        'app.mirai.audio',
        /^localhost:\d+$/]
    },
  };

  ENV.i18n = {
    defaultLocale: 'en'
  };

  let runProcess = process.argv.join(' ');
  if (runProcess.indexOf('ember cdv') >= 0 ||
      runProcess.indexOf('ember cordova') >= 0) {
    // If the app is running as a Cordova app configure it to use hash location
    ENV.rootURL = false;
    ENV.locationType = 'hash';
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};

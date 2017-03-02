var mirVersion = require('../package.json').version;

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'mir',
    environment: environment,
    version: mirVersion,
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

    // FastBoot
    fastboot: {
      hostWhitelist: [
        'mirai.audio',
        'api.mirai.audio',
        'app.mirai.audio',
        /^localhost:\d+$/]
    },

    // Content Security Policy header
    contentSecurityPolicyHeader: 'Content-Security-Policy',
  };

  ENV.apiUrl = process.env.API_URL ||
    'https://api.mirai.audio';

  ENV.contentSecurityPolicy = {
    'default-src': [
      "'self'", 'data:', 'gap:',
      '127.0.0.1:*',
      'localhost:* ',
      'https://ssl.gstatic.com' /* Required by Android TalkBack */
    ],
    'script-src': [
      "'self'", "'unsafe-inline'", "'unsafe-eval'",
      '127.0.0.1:*',
      'localhost:*',
    ],
    'style-src': [
      "'self'", "'unsafe-inline'", 'data:',
    ],
    'img-src': [
      "'self'", 'data:',
    ],
    'font-src': [
      "'self'", 'data:',
    ],
    'connect-src': [
      "'self'", "data:",
      'http://localhost:*',  // development
      'ws://localhost:*',     // Anyone
      'https://api.mirai.audio:*',  // prod
      'wss://api.mirai.audio:*',  // prod
      /* API https:// */
      ENV.apiUrl,
      /* remote Chrome LiveReload websocket */
      'ws://10.255.247.75:*',  // žižek
    ],
  };

  // Internationalization
  ENV.i18n = {
    defaultLocale: 'en'
  };

  // HTML <title>s
  ENV.pageTitle = {
    prepend: true,
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

    ENV.apiUrl = process.env.API_URL ||
      'http://localhost:4000';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

    // API endpoint
    ENV.apiUrl = process.env.API_URL ||
      'http://localhost:4000';
  }

  if (environment === 'production') {

  }

  return ENV;
};

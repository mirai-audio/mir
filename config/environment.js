'use strict';

const VERSION = require('../package.json').version;
const CSPYoutube = require('./csp-youtube');

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'mir',
    environment,
    hostUrl: process.env.HOST || 'http://localhost:4200',
    version: VERSION,
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

    DS: {
      host: process.env.API_URL || 'https://api.mirai.audio',
      namespace: 'api/v1'
    },

    // FastBoot
    fastboot: {
      hostWhitelist: [
        'mirai.audio',
        'app.mirai.audio',
        'prd.mirai.audio',
        'stg.mirai.audio',
        /mirai.audio:\d+$/,
        /^localhost:\d+$/,
        /^127.0.0.1:\d+$/
      ]
    },

    // Content Security Policy header
    contentSecurityPolicyHeader: 'Content-Security-Policy',

    // ember-simple-auth
    'ember-simple-auth': {
      authenticationRoute: 'login',
      routeIfAlreadyAuthenticated: 'index',
      routeAfterAuthentication: 'index'
    },

    // Torii
    torii: {
      sessionServiceName: 'session',
      providers: {
        twitter: {
          requestTokenUri:
            process.env.TWITTER_REQUEST_TOKEN_URL ||
            '//localhost:4000/login/twitter' // Ai handles twitter OAuth
        }
      }
    }
  };

  ENV.contentSecurityPolicy = {
    'default-src': [
      "'self'",
      'data:',
      'gap:',
      '127.0.0.1:*',
      'localhost:* ',
      'https://ssl.gstatic.com' /* Required by Android TalkBack */
    ],
    'connect-src': [
      "'self'",
      'data:',
      'http://127.0.0.1:*', // development
      'http://localhost:*', // development
      'ws://localhost:*', // Anyone
      'https://api.mirai.audio:*', // prod
      'wss://api.mirai.audio:*', // prod
      /* API https:// */
      ENV.DS.host,
      /* remote Chrome LiveReload websocket */
      'ws://10.255.247.75:*' // žižek
    ],
    'font-src': ["'self'", 'data:'],
    'frame-src': [],
    'img-src': ["'self'", 'data:'],
    'script-src': [
      "'self'",
      "'unsafe-inline'",
      "'unsafe-eval'",
      '127.0.0.1:*',
      'localhost:*'
    ],
    'style-src': ["'self'", "'unsafe-inline'", 'data:']
  };
  // append all providers content security policy rules to the defaults above.
  const CSPProviders = [CSPYoutube];
  for (let provider in CSPProviders) {
    for (let rule in CSPProviders[provider]) {
      ENV.contentSecurityPolicy[rule] = ENV.contentSecurityPolicy[rule].concat(
        CSPProviders[provider][rule]
      );
    }
  }

  // Internationalization
  ENV.i18n = {
    defaultLocale: 'en'
  };

  // HTML <title>s
  ENV.pageTitle = {
    prepend: true,
    separator: ' – '
  };

  let runProcess = process.argv.join(' ');
  if (
    runProcess.indexOf('ember cdv') >= 0 ||
    runProcess.indexOf('ember cordova') >= 0
  ) {
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
    ENV.DS.host = process.env.API_URL || 'http://localhost:4000';

    // disable ember-cli-mirage in development by default, unless set
    ENV['ember-cli-mirage'] = {
      enabled: process.env.MIRAGE || false
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;

    // API endpoint, uses ember-cli-mirage during tests
    ENV.DS.host = process.env.API_URL || 'http://localhost:4040';
  }

  /*
  if (environment === 'production') {
  }
  */

  return ENV;
};

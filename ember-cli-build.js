'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const GETENVJSON = require('./config/environment');
const HOST = GETENVJSON().DS.host;
const VERSION = GETENVJSON().version;

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    fingerprint: {
      extensions: ['css', 'gif', 'js', 'jpg', 'png', 'map', 'svg']
    },

    inlineContent: {
      host: {
        content: HOST
      },
      environment: {
        content: EmberApp.env()
      },
      version: {
        content: VERSION
      }
    },

    sassOptions: {
      includePaths: ['node_modules/system-font-i18n-css', 'node_modules/bulma']
    },

    svgJar: {
      sourceDirs: ['public/images']
    },

    vendorFiles: {
      'jquery.js': null // removes jQuery from build
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};

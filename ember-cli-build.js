/* global require, module */
/* eslint-env node */
'use strict';

const getEnvJSON = require('./config/environment');
const host = getEnvJSON().DS.host;
const mirVersion = getEnvJSON().version;
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    fingerprint: {
      extensions: ['css', 'gif', 'js', 'jpg', 'png', 'map', 'svg'],
    },
    inlineContent: {
      host: {
        content: host,
      },
      environment: {
        content: EmberApp.env(),
      },
      version: {
        content: mirVersion,
      },
    },
    sassOptions: {
      includePaths: [
        'node_modules/system-font-i18n-css',
        'node_modules/bulma',
      ],
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

/* global require, module */

var getEnvJSON = require('./config/environment');
var host = getEnvJSON().DS.host;
var mirVersion = getEnvJSON().version;
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
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

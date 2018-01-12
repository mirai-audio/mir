/* eslint-disable */
import Application from '@ember/application';
import loadInitializers from 'ember-load-initializers';
import Resolver from 'mir/resolver';
import 'mir/models/custom-inflector-rules';
import config from 'mir/config/environment';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

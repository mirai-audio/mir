/* eslint-disable */
import Ember from 'ember';
import loadInitializers from 'ember-load-initializers';

import './models/custom-inflector-rules';
import Resolver from './resolver';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
});

loadInitializers(App, config.modulePrefix);

export default App;

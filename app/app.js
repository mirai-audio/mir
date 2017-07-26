/* eslint-disable */
import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import './models/custom-inflector-rules';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

const App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
});

loadInitializers(App, config.modulePrefix);

export default App;

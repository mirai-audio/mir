/* eslint-disable */
import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  version: config.APP.version,
  locale: config.i18n.defaultLocale,
});

Router.map(function() {
  this.route('styleguide');
});

export default Router;

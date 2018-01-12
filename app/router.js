/* eslint-disable */
import EmberRouter from '@ember/routing/router';
import config from 'mir/config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('logout');

  this.route('media', function() {
    this.route('new');
  });

  this.route('styleguide');
  this.route('typography');
  this.route('welcome');
});

export default Router;

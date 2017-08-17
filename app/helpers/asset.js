import Ember from 'ember';
import config from '../config/environment';

export function asset(param /* hash */) {
  const rootURL = (config.rootURL ? config.rootURL : '');
  return `${rootURL}${param}`;
}

export default Ember.Helper.helper(asset);

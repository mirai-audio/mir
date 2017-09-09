import { JSONAPISerializer } from 'ember-cli-mirage';
import Ember from 'ember';

export default JSONAPISerializer.extend({
  keyForAttribute(attr) {
    return attr === 'access_token' ?
      attr :
      Ember.String.dasherize(attr);
  },
});

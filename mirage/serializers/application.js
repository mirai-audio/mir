import { JSONAPISerializer } from 'ember-cli-mirage';
import { dasherize } from '@ember/string';

export default JSONAPISerializer.extend({
  keyForAttribute(attr) {
    return attr === 'access_token' ? attr : dasherize(attr);
  },
});

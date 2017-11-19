import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  providerUid(i) {
    return `provider ${i}`;
  }
});

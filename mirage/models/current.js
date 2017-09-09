import { Model } from 'ember-cli-mirage';

export default Model.extend({
  providerUid(i) {
    return `provider ${i}`;
  },
});

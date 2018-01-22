import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  classNames: ['ma-MediaListItem'],

  actions: {
    delete(model) {
      return model.destroyRecord();
    }
  }
});

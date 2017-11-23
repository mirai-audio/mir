import Service from '@ember/service';

export default Service.extend({
  /* eslint-disable ember/avoid-leaking-state-in-ember-objects */
  history: {
    back(window) {
      if ('history' in window) {
        window.history.back();
      }
    }
  }
  /* eslint-enable ember/avoid-leaking-state-in-ember-objects */
});

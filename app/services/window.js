import Service from '@ember/service';

export default Service.extend({
  history: {
    back(window) {
      if ('history' in window) {
        window.history.back();
      }
    },
  },
});

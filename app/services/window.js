import Service from '@ember/service';

export default Service.extend({
  history: {
    back() {
      if ('history' in window) {
        window.history.back();
      }
    },
  },
});

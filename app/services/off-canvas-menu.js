import Ember from 'ember';

export default Ember.Service.extend({
  isActive: false,

  toggle() {
    const isActive = this.get('isActive');
    this.set('isActive', !isActive);
  },
});

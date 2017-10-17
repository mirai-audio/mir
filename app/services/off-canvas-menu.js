import { get, set } from '@ember/object';
import Service from '@ember/service';

export default Service.extend({
  isActive: false,

  toggle() {
    const isActive = get(this, 'isActive');
    set(this, 'isActive', !isActive);
  },
});

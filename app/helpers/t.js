import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default Helper.extend({
  intl: service(),

  /**
   * Translate a string using the active locale.
   *
   * @returns translation string if a translation key exists, otherwise the key.
   */
  compute(params, interpolations) {
    let key = params[0];
    return this.intl.exists(key) ? this.intl.t(key, interpolations) : key;
  }
});

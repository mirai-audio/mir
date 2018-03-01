import Helper from '@ember/component/helper';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Helper.extend({
  i18n: service(),

  /**
   * Translate a string using the active locale.
   *
   * @returns translation string if a translation key exists, otherwise the key.
   */
  compute(params, interpolations) {
    let key = params[0];
    let i18n = get(this, 'i18n');
    return i18n.exists(key) ? i18n.t(key, interpolations) : key;
  }
});

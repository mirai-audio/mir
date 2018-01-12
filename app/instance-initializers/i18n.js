import { get, set } from '@ember/object';

function detectHeaderLocale(headerValue) {
  let locale = headerValue || 'en';
  locale = locale.split(',')[0];
  return locale;
}

function getNavigatorLocale(navigator) {
  return (
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage ||
    'en'
  );
}

function detectLocale(appInstance) {
  const fastBoot = appInstance.lookup('service:fastboot');
  let locale = 'en'; // set a default fallback

  if (fastBoot.isFastBoot) {
    // detect locale from an HTTP request
    const headers = get(fastBoot, 'request.headers');

    /* eslint-disable ember/use-ember-get-and-set */
    // headers implements the Fetch API, not Ember
    const acceptLanguageHeader = headers.get('Accept-Language');
    /* eslint-enable ember/use-ember-get-and-set */

    locale = detectHeaderLocale(acceptLanguageHeader);
  } else if ('navigator' in window) {
    // detect locale on the frontend
    return getNavigatorLocale(window.navigator);
  }
  return locale;
}

export default {
  name: 'i18n',
  initialize(appInstance) {
    let service = appInstance.lookup('service:i18n');
    const agentLocale = detectLocale(appInstance);

    // use the local, if we have a translation defined, otherwise fallback to en
    let availableLocale = get(service, 'locales').includes(
      agentLocale.toLowerCase()
    )
      ? agentLocale
      : 'en';
    set(service, 'locale', availableLocale);
  }
};

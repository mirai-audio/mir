import { get } from '@ember/object';

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
  name: 'intl',
  initialize(appInstance) {
    const service = appInstance.lookup('service:intl');
    const agentLocale = detectLocale(appInstance).toLowerCase();
    const genericAgentLocale = agentLocale.split('-')[0]; // RFC 3066 Language Tag

    let availableLocale = 'en'; // default language to english
    // check for matching RFC 3066 language tag and region
    if (service.locales.includes(agentLocale)) {
      // app provides both matching language tag, and region
      availableLocale = agentLocale;
    }
    // check for matching RFC 3066 language tag
    if (service.locales.includes(genericAgentLocale)) {
      // app provides just a matching language tag
      availableLocale = genericAgentLocale;
    }

    service.setLocale(availableLocale);
  }
};

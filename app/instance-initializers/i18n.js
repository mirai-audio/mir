function detectHeaderLocale(headerValue) {
  let locale = (headerValue || 'en');
  locale = locale.split(',')[0];
  return locale;
}

function getNavigatorLocale(navigator) {
  return (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage ||
    'en';
}

function detectLocale(appInstance) {
  const fastBoot = appInstance.lookup('service:fastboot');
  let locale = 'en'; // set a default fallback

  if (fastBoot.isFastBoot) {
    // detect locale from an HTTP request
    const headers = fastBoot.get('request.headers');
    const acceptLanguageHeader = headers.get('Accept-Language');
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
    const locale = detectLocale(appInstance);
    appInstance.lookup('service:i18n').set('locale', locale);
  },
};

function detectFirstLocale(headerValue) {
  let locale = (headerValue !== null ? headerValue : 'en');
  locale = locale.split(',')[0];
  return locale;
}

function detectLocale(appInstance) {
  const fastBoot = appInstance.lookup('service:fastboot');
  let locale = 'en';  // set a default fallback

  if (fastBoot.isFastBoot) {
    // detect locale from an HTTP request
    const headers = fastBoot.get('request.headers');
    const acceptLanguageHeader = headers.get('Accept-Language');
    locale = detectFirstLocale(acceptLanguageHeader);
  } else if ('navigator' in window) {
    // detect locale on the frontend
    return navigator.language || navigator.userLanguage || 'en';
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

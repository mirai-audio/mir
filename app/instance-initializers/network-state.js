export function initialize(/* appInstance */) {
  // feature test to prevent running in FastBoot
  if ('addEventListener' in window) {
    window.addEventListener('online', (/* event */) => {
      // ToDo: Resync data with server
      // disable .Offline
      const htmlElement = window.document.querySelector('html');
      htmlElement.classList.remove('is-offline');
    }, false);

    window.addEventListener('offline', (/* event */) => {
      // ToDo: Queue up events for server
      // enable .Offline
      const htmlElement = window.document.querySelector('html');
      htmlElement.classList.add('is-offline');
    }, false);

    // enable .Offline if the app loaded without net connection
    if (window.navigator.onLine === false) {
      const htmlElement = window.document.querySelector('html');
      htmlElement.classList.add('is-offline');
    }
  }
}

export default {
  name: 'network-state',
  initialize,
};

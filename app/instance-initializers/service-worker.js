export function initialize(/* appInstance */) {
  // feature test to prevent running in FastBoot
  if ('navigator' in window && 'serviceWorker' in window.navigator) {
    // if host is not localhost, run the service worker
    if ((window.document.location.hostname.match(/localhost/) === null) ||
        (window.document.location.search.match(/dev=true/) !== null)
    ) {
      window.navigator.serviceWorker.register('/service-worker.js')
        .catch((err) => {
          console.warn('Error while registering service worker', err);
        });
      // 🤞
    }
  }
}

export default {
  name: 'service-worker',
  initialize,
};

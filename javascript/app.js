if ('serviceWorker' in window.navigator) {
  // if host is not localhost, run the service worker
  if ((window.document.location.hostname.match(/localhost/) === null) ||
      (window.document.location.search.match(/dev=true/) !== null)
  ) {
    window.navigator.serviceWorker.register('/service-worker.js')
      .catch(function(err) {
        console.warn('Error whilst registering service worker', err);
      });
    // 🤞
  }
}

window.addEventListener('online', function(e) {
  // ToDo: Resync data with server
  // disable .Offline
  let htmlElement = window.document.querySelector('html');
  htmlElement.classList.remove('is-offline');
}, false);

window.addEventListener('offline', function(e) {
  // ToDo: Queue up events for server
  // enable .Offline
  let htmlElement = window.document.querySelector('html');
  htmlElement.classList.add('is-offline');
}, false);

requestAnimationFrame(function() {
  // inject CSS
  const stylesheets = [
    '/css/styles.css'
  ];
  stylesheets.forEach(function(url) {
    let link = window.document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    window.document.head.appendChild(link);
  });

  // enable .Offline if the app loaded without net connection
  if (window.navigator.onLine === false) {
    let htmlElement = window.document.querySelector('html');
    htmlElement.classList.add('is-offline');
  }
});

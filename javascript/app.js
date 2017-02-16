if (navigator.serviceWorker) {
  // if host is not localhost, run the service worker
  if (document.location.host.match(/localhost/) === null) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function(reg) {
        console.log('Successfully registered service worker', reg);
      })
      .catch(function(err) {
        console.warn('Error whilst registering service worker', err);
      });
    // 🤞
  }
}

window.addEventListener('online', function(e) {
  // Resync data with server

  // disable .Offline
  document.getElementsByTagName('html')[0].classList.remove('is-offline');
}, false);

window.addEventListener('offline', function(e) {
  // ToDo: Queue up events for server

  // enable .Offline
  document.getElementsByTagName('html')[0].classList.add('is-offline');
}, false);

requestAnimationFrame(function() {
  // inject CSS
  const stylesheets = [
    '/css/styles.css'
  ];
  stylesheets.forEach(function(url) {
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
  });

  // enable .Offline if the app loaded without net connection
  if (navigator.onLine === false) {
    document.getElementsByTagName('html')[0].classList.add('is-offline');
  }
});

if (navigator.serviceWorker) {
  if (document.location.search.match(/localhost/) !== null) {
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
  console.log('You are online');
}, false);

window.addEventListener('offline', function(e) {
  // Queue up events for server
  console.log('You are offline');
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
});

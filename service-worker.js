// Use a cacheName for cache versioning
const VERSION = '0.2.0',
  cacheName = `mirai.audio-v${version}`;

// During the installation phase, you'll usually want to cache static assets.
self.addEventListener("install", function(e) {
  // Once the service worker is installed, go ahead and fetch the resources to make this work offline.
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll([
        "/",
        "/css/styles.css",
        "/images/android-chrome-192x192.png",
        "/images/android-chrome-192x192.png",
        "/images/favicon-16x16.png",
        "/images/logo.svg",
        "/javascript/app.js",
      ])
      .then(function() {
        self.skipWaiting();
      });
    })
  );
});

// when the browser fetches a URL…
self.addEventListener("fetch", function(event) {
  // … either respond with the cached object or go ahead and fetch the actual URL
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        // retrieve from cache
        return response;
      }
      // fetch as normal
      return fetch(event.request);
    })
  );
});

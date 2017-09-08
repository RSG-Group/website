const CACHE_NAME = 'sept-17-p3' // synchronized with version number of app.
const urlsToCache = ['/', '/chess', '/intersection'] // self-explanatory

// On installation, open the cache..
this.addEventListener('install', event => {
  const preLoaded = caches.open(CACHE_NAME)
  // then cache all urls to cache.
    .then(cache => cache.addAll(urlsToCache))
  // make website wait until our cache is good to go.
  event.waitUntil(preLoaded)
})

// on request of cached url, do this.
this.addEventListener('fetch', event => {
  // find a match for the request in cache.
  const response = caches.match(event.request)
    .then(match => match || fetch(event.request))
  // respond with the page we retrieved from cache.
  event.respondWith(response)
})

// So, we activate the service worker and delete the old service worker on update.
this.addEventListener('activate', function (event) {
  // this is the whitelist of caches not to delete.
  var cacheWhitelist = [CACHE_NAME]

  // this code block makes website block until all caches except the ones in whitelist is deleted.
  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key)
        }
      }))
    })
  )
  // the code block ends here.
})

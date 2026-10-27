// Cambia il numero di versione ogni volta che aggiorni i file, così i telefoni scaricano la nuova copia.
var CACHE = 'statistiche-pallavolo-v1';
var SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return c.addAll(SHELL); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys
          .filter(function (k) { return k !== CACHE && k !== 'fonts'; })
          .map(function (k) { return caches.delete(k); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);

  // Font di Google: si salvano alla prima apertura con rete e poi funzionano anche offline.
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(
      caches.open('fonts').then(function (c) {
        return c.match(req).then(function (hit) {
          var net = fetch(req)
            .then(function (res) { c.put(req, res.clone()); return res; })
            .catch(function () { return hit; });
          return hit || net;
        });
      })
    );
    return;
  }

  if (url.origin !== location.origin) return;
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(function (hit) { return hit || fetch(req); })
  );
});

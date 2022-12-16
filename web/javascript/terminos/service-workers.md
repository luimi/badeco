# Service Workers

Permite tener y cargar desde cache, archivos y peticiones de la web

## Verificar si el navegador permite service workers

```javascript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  });
}
```

## Service Worker (sw.js)

```javascript
const VERSION = 'v1';

// evento de instalacion
self.addEventListener('install', event => {
  event.waitUntil(precache());
});

// evento al intentar obtener datos del fetch
self.addEventListener('fetch', event => {
  const request = event.request;
  // get
  if (request.method !== 'GET') {
    return;
  }

  // buscar en cache
  event.respondWith(cachedResponse(request));

  // actualizar el cache
  event.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    '/',
    '/index.html',
    '/assets/index.js',
    '/assets/MediaPlayer.js',
    '/assets/plugins/AutoPlay.js',
    '/assets/plugins/AutoPause.ts',
    '/assets/index.css',
    '/assets/BigBuckBunny.mp4',
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return cache.put(request, response);
}

```
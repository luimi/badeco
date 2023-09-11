# PWA

## Vanilla

### index.html

```
<!DOCTYPE html>
<html>

<head>
    <link rel="manifest" href="manifest.json" />
    <link rel="apple-touch-icon" href="logo.png" />
    <meta name="apple-mobile-web-app-status-bar" content="#db4938" />
    <meta name="theme-color" content="#db4938" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>

<body>
    <script>
        //Verifica e inicializa el service worker
        if ("serviceWorker" in navigator) {
            window.addEventListener("load", function () {
                navigator.serviceWorker
                    .register("/serviceworker.js")
            })
        }
        //Verifica que sea posible hacer la instalacion en el dispositivo o si ya esta instalada
        window.addEventListener('beforeinstallprompt', event => {
            if (!window.matchMedia('(display-mode: standalone)').matches) {
                //Iniciar instalacion
                //event.prompt();
            }
            return event.preventDefault();
        });
    </script>
</body>
</html>
```

### manifest.json

```
{
  "name": "Sample PWA",
  "short_name": "Sample",
  "start_url": "index.html",
  "display": "standalone",
  "background_color": "#fdfdfd",
  "theme_color": "#db4938",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "logo.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    }
  ]
}
```

### serviceworker.js

```
const storageCacheName = "SampleAppCache"
//Listado de assets persistentes y accesibles offline o caché - Vacio para siempre cargar
const assets = []
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(storageCacheName).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})
```


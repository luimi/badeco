# Leaflet

## Requerimientos
- Proyecto angular

## Instalación

```terminal
npm install leaflet @types/leaflet
```

Modificar angular.json y agregar

```
"assets": [
    ...
    {
    "glob": "**/*",
    "input": "./node_modules/leaflet/dist/images",
    "output": "leaflet/"
    }]
...
"styles": [
    ...
    "node_modules/leaflet/dist/leaflet.css",
],
```

## Implementación

```
...
import 'leaflet';
declare let L: any;
...

map: any;
...

ngOnInit() {
    this.map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(this.map);
}
ngAfterViewChecked() {
    this.map.invalidateSize()
}
```
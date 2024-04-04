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
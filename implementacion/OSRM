# Instalar OSRM

## Docker

##Requerimientos
- Docker
- Mapa - [link](http://download.geofabrik.de/)

## Proceso

```bash
docker run -t -v "${PWD}:/data" osrm/osrm-backend osrm-extract -p /opt/car.lua /data/{nombre}.osm.pbf
docker run -t -v "${PWD}:/data" osrm/osrm-backend osrm-partition /data/{nombre}.osrm
docker run -t -v "${PWD}:/data" osrm/osrm-backend osrm-customize /data/{nombre}.osrm
docker run -t -i -p 5000:5000 -v "${PWD}:/data" osrm/osrm-backend osrm-routed --algorithm mld /data/{nombre}.osrm

```

## Linux

## Requerimientos

- Linux
- NodeJs
- 8gb - `ram`
- Mapa - [link](http://download.geofabrik.de/)

## Proceso

### Procesar el archivo .pbf

```bash
node_modules/osrm/lib/binding/osrm-extract {ruta/archivo}.osm.pbf -p node_modules/osrm/profiles/car.lua
```

### Procesar el archivo .osrm
```bash
node_modules/osrm/lib/binding/osrm-contract {ruta/archivo}.osrm
```

### Utilizar en node
```javascript
var OSRM = require('osrm');
var osrm = new OSRM('{ruta/archivo}.osrm');
osrm.route({coordinates: [[{lng},{lat}], [{lng},{lat}]]}, (err, result) => {
  if(err){
    console.log(err);
  } else {
    console.log(result);
  }
});
```
---
[Fuente](https://github.com/Project-OSRM/osrm-backend)
[NodeJs](https://github.com/Project-OSRM/osrm-backend/blob/master/docs/nodejs/api.md)
[Documentacion](http://project-osrm.org/docs/v5.24.0/api/#)

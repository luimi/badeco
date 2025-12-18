# Instalar OSRM

## Docker

## Requerimientos
- Docker
- Mapa - [link](http://download.geofabrik.de/)

## Proceso

```bash
docker run -t -v "${PWD}:/data" osrm/osrm-backend osrm-extract -p /opt/car.lua /data/<nombre>.osm.pbf
docker run -t -v "${PWD}:/data" osrm/osrm-backend osrm-partition /data/<nombre>.osrm
docker run -t -v "${PWD}:/data" osrm/osrm-backend osrm-customize /data/<nombre>.osrm
docker run -t -i -p 5000:5000 -v "${PWD}:/data" osrm/osrm-backend osrm-routed --algorithm mld /data/<nombre>.osrm

```

## Node

## Requerimientos

- Linux (Ubuntu)
- NodeJs
- 8gb - `ram`
- Mapa - [link](http://download.geofabrik.de/)

## Proceso

### Procesar el archivo .pbf

```bash
./node_modules/@project-osrm/osrm/lib/binding_napi_v8/osrm-extract <nombre-archivo>.osm.pbf -p node_modules/@project-osrm/osrm/profiles/car.lua
```

### Procesar el archivo .osrm
```bash
./node_modules/@project-osrm/osrm/lib/binding_napi_v8/osrm-contract <nombre-archivo>.osrm
```

### Utilizar en node
```javascript
var OSRM = require('@project-osrm/osrm');
var osrm = new OSRM('<nombre-archivo>.osrm');
osrm.route({coordinates: [[<lng>,<lat>], [<lng>,<lat>]]}, (err, result) => {
  if(err){
    console.log(err);
  } else {
    console.log(result);
  }
});
```

### Errores

> error while loading shared libraries: libtbbmalloc_proxy.so.2: cannot open shared object file: No such file or directory

sudo apt install libtbbmalloc2

> error while loading shared libraries: libtbb.so.12: cannot open shared object file: No such file or directory

sudo apt install libtbb12 

> Error: Cannot find module './binding/node_osrm.node'

```
nano node_modules/@project-osrm/osrm/lib/index.js

-var OSRM = module.exports = require('./binding/node_osrm.node').OSRM;
+var OSRM = module.exports = require('./binding_napi_v8/node_osrm.node').OSRM;
```

---
[Fuente](https://github.com/Project-OSRM/osrm-backend)
[NodeJs](https://github.com/Project-OSRM/osrm-backend/blob/master/docs/nodejs/api.md)
[Documentacion](http://project-osrm.org/docs/v5.24.0/api/#)

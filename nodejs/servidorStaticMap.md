# Servidor StaticMap

## Requerimientos
- NodeJs
- Express
- StaticMap

## Proceso

### Instalar dependencias

```
npm i express
npm i staticmaps
```

### Index.js

```javascript
const express = require("express");
const app = express();
const StaticMaps = require("staticmaps");

app.get("/", async (req, res) => {
    let options = {
        width: 640,
        height: 480,
        tileUrl: "https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}",
    };
    let map = new StaticMaps(options);
    let marker = {
        img: "http://maps.google.com/mapfiles/kml/paddle/red-circle.png",
        offsetX: 24,
        offsetY: 48,
        width: 48,
        height: 48,
        coord: [-74.809445, 10.980142]
    };
    map.addMarker(marker);
    await map.render();
    await map.image.save(__dirname + "/map.png");
    res.sendFile(__dirname + "/map.png");
});
app.listen(3000);
```
---
[src y doc](https://github.com/StephanGeorg/staticmaps)

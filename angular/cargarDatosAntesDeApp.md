# Cargar datos antes de iniciar App.component

## Requerimientos
- Proyecto angular

## Pasos

### Crear appConfig.ts

```
export function AppConfig(/* Imports necesarios*/): () => Promise<any> {
    return () => new Promise(async (res, rej) => {
        // Proceso
    })
}
```

### Agregar a App.module

```
import { NgModule, APP_INITIALIZER } from '@angular/core';
...
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: AppConfig,
    deps: [/*Imports necesarios*/],
    multi: true
   },{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
...
```
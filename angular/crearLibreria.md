# Crear libreria

## Requerimientos
- Angular CLI

## Proceso

### Crear proyecto
```
ng new {nombreProyecto}
cd {nombreProyecto}
ng generate library {nombreLibreria}
```

### Componentes y Services
crea los componentes o services dentro de: 
> projects/{nombreLibreria}/src/lib

agrega los componentes, modules o services a: 
> project{nombreLibreria}/src/public-api.ts

### Empaquetar libreria
```
ng build {nombreLibreria}
cd dist/{nombreLibreria}
npm pack
```

### Instalar en otro proyecto

```
npm install /ruta/libreria/dist/{nombreLibreria}/{nombreLibreria}-*.tgz
```

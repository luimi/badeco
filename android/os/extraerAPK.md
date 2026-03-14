# Extraer APK ya instalada

## Requerimientos

- adb

## Proceso adb

### Listar los paquetes instalados

```bash
adb shell pm list packages
```

### Imprimir la ubicacion de la instalacion

```bash
adb shell pm path {nombre de paquete}
```

### Extraer el apk

```bash
adb pull {ruta/del/app}/base.apk
```

## Proceso AntiSplit M

Descargar e instalar [apk](https://github.com/AbdurazaaqMohammed/AntiSplit-M)

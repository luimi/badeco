# Descompilar APK de React Native

## Requerimientos

- APK
- apktool
- hermes-dec

## Implementación

Primero debes descompilar el APK para genera el *index.android.bundle*

```terminal
apktool d app.apk
```

Esto genera una carpeta con el mismo nombre del APK la cual contiene el index.android.bundle en la carpeta /nombreapk/assets/index.android.bundle.

Ahora debes desencriptar el archivo para hacerlo legible

```terminal
python3 hbc_decompiler.py ruta/al/index.android.bundle ruta/destino/legible.js
```
# Cambiar la densidad(dpi) de tu android sin ser root

## Requerimientos

- adb

## Proceso

### Saber tu dpi actual
en donde dice density sera nuestro dpi actual

```bash
adb shell dumpsys | grep mBaseDisplayInfo
```


### Cambiar el dpi y reiniciar el android

```bash
adb shell wm density {dpi} && adb reboot
```

### Densidades populares

`120dpi` - `ldpi`
`160dpi` - `mdpi`
`240dpi` - `hdpi`
`320dpi` - `xhdpi`
`480dpi` - `xxhdpi`
`640dpi` - `xxxhdpi`

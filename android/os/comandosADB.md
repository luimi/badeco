# Comandos ADB

## Requerimientos
- adb

## Comandos

### Deshabilitar/habilitar notificaciones emergentes
```terminal
adb shell settings put global heads_up_notifications_enabled {0/1}
```


### Deshabilitar/habilitar ventanas flotantes
```terminal
adb shell settings put global enable_freeform_support {0/1}
```


### Tap en la pantalla
```terminal
adb shell input tap {x} {y}
```


### Saber los DPI actuales
```terminal
adb shell dumpsys | grep mBaseDisplayInfo
```
*en donde dice density sera nuestro dpi actual*


### Cambiar el DPI del dispositivo
```terminal
adb shell wm density {560} && adb reboot
```
*120,160,240,320,480,640*


### Grabar en vídeo la pantalla
```terminal
adb shell screenrecord /sdcard/video.mp4
```


### Rotar pantalla
```terminal
adb shell
settings put system user_rotation {0/1/2/3}
```
- 1 y 3 landscape
- 0 y 2 portrait


### Estado de bateria
```terminal
adb shell dumpsys battery
```
# Habilitar y Deshabilitar el UI de Android
Muestra u oculta la barra superior y la barra de navegacion inferior en todo el sistema

## Requerimientos
- adb

### Deshabilitar UI
```shell
adb shell
su 
pm disable com.android.systemui
reboot
```
### Habilitar UI
```shell
adb shell
su
pm enable com.android.systemui
reboot
```
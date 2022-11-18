# Pantalla Rota En Android

## Manipulación
- OTG, Bluetooth> Mouse
- OTG, Bluetooth> Keyboard
- OTG, Bluetooth> GamePad
- Transmisión de pantalla Chromecast
- Transmisión de pantalla Miracast
- MHL, SlimPort, USB-C -> HDMI

### Keyboard - Atajos
- **Win+n** > Despliega barra de notificaciones
- **Win+b** > Abre aplicación navegador web
- **Win+c** > Abre aplicación de contactos
- **Win+Enter** > Home
- **Flechas** > Mueve el focus
- **Tab** > Focus al siguiente
- **Esc** > Atrás
- **Ctrl+Esc** > Menú 
- **Imp Pant** > Screenshot

## Desactivar seguridad
- Configuración> Seguridad> Bloqueo de pantalla> Ninguno
- Configuración> Dispositivo> Pantalla de bloqueo> Desbloqueo de pantalla> Ninguno

## Activar modo desarrollador
### Paso 1
- Configuración> Acerca del teléfono/dispositivo> Numero de compilación> 7 veces
- Ajustes> Sistema> Acerca del dispositivo> Numero de compilación> 7 veces

### Paso 2
- Configuración> Programador> Depuración por USB
- Configuración> Sistema> Opciones avanzadas> Desarrollador> Depuración por USB
- Ajustes> Sistema> Opciones del programador> Depuración por USB

## Rootear
- King root
- Frama root
- iRoot
- RootGenius

## Instalar no keyboard
- [No Keyboard](https://play.google.com/store/apps/details?id=io.github.visnkmr.nokeyboard)
- [Null Keyboard](https://apkcombo.com/es/null-keyboard/com.wparam.nullkeyboard/)

## Habilitar ADB Wifi siempre
agregar a /system/build.prop, service.adb.tcp.port=5555

- [BuildProp Editor](https://play.google.com/store/apps/details?id=com.jrummy.apps.build.prop.editor)
- [Manual](https://xatom.dev/2014/07/26/edit-build-prop-using-adb)

## Habilitar confiar cualquier computador
adb root
| adbd cannot run as root in production builds
adb disable-verity

### Puede quedar como:
- Consola o emulación - Display bueno
- Testing de aplicaciones
- Servidor Debian (UserLAnd)
- Router 4G


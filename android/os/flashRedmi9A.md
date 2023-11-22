# Flash Xiaomi Redmi 9A (dandelion)

## Requerimientos

- [Mi Unlock](https://miuirom.xiaomi.com/rom/u1106245679/6.5.224.28/miflash_unlock-en-6.5.224.28.zip "‌")
- Cuenta de Xiaomi
- Custom recovery [OrangeFox](https://orangefox.download/es-ES/device/garden "‌"), [TWRP](http://www.mediafire.com/file/lzlvfhnlxvpkkg8/342+Redmi+9A.rar/file "‌") , [vbmeta](https://unofficialtwrp.com/wp-content/uploads/2019/11/vbmeta.zip "‌")
- Guias - [XdaDev](https://xdaforums.com/c/redmi-9a.10997/ "‌")
- Roms - [Stock](https://xiaomifirmwareupdater.com/miui/dandelion/ "‌") , [XiaomiFirmware](https://xiaomifirmware.com/roms/download-custom-roms-for-redmi-9a/ "‌")

## Desbloquear Bootloader

Recuerda: Esto borrara todo el contenido del telefono a su estado de fabrica.

- Abir Mi Unlock, e ingresar a la cuenta con el QR
- Apagar el telefono
- Iniciar en fastboot, vol- pwr
- Iniciar desbloqueo, si es la primera vez, te pedira que vuelvas a intentarlo en una semana, tendras que esperar y volver a hacer todos los pasos

## Instalar OrangeFox

- Iniciar en fastboot, vol- pwr

```
fastboot -w
fastboot flash recovery recovery.img
fastboot reboot
```

## Instalar TWRP

- Iniciar en fastboot, vol- pwr

```
fastboot -w
fastboot flash recovery recovery.img
fastboot reboot
```

## Flashear

- Entrar en recovery, recien instalado, vol+ pwr
- Wipe> Format Data> Yes
- Install> selecciona la rom y swipe
- Wipe Data/Cache
- Reboot System

## Errores

> 1004: unknown error try again later

Cuando Mi Unlock intenta verificar el telefono, intentar logearse con el QR

[Errores generales](https://droidwin.com/fix-failed-to-mount-system-invalid-argument-in-twrp/ "‌")

---

## Fuente

[MIUI](https://en.miui.com/unlock/download_en.html "‌")
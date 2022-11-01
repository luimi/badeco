## Requerimientos
- Fastboot
- [Imagenes del sistema](https://developers.google.com/android/images)

## Proceso

### flash.sh
```sh
#!/bin/sh

fastboot flash bootloader bootloader-hammerhead-*.img
fastboot reboot-bootloader
fastboot flash recovery recovery.img
fastboot flash boot boot.img
fastboot flash radio radio-hammerhead-*.img
fastboot flash cache cache.img
fastboot flash userdata userdata.img
fastboot flash system system.img
fastboot reboot
```
# root huawei p20 lite

## Requisitos

- Telefoto Huawei p20 lite (ANE-LX3)
- Windows
- [PotatoNV](https://github.com/mashed-potatoes/PotatoNV?tab=readme-ov-file)
- [Magisk APK](https://github.com/topjohnwu/Magisk/releases)
- [Assets1](https://drive.google.com/drive/folders/1X6wfsNBO_IkX8p9JTlENvOgY_laa)
- [Assets2](https://androidfilehost.com/?fid=17825722713688263725) - password: https://ministryofsolutions.com

## Proceso

### Unlock bootloader

Para rootear este teléfono es necesario desbloquear el bootloader

### Hacer testpoint
1. Destapar teléfono
2. Juntar el punto con la tierra (placa metálica)
3. Conectar el cable USB
4. Verificar en administrador de dispositivos que este conectado como COM

### Cambiar código de OEM unlock
1. Ejecutar potatoNV
2. Seleccionar dispositivo
3. Seleccionar bootloader Kirin 65x(A)
4. Pulsar start
5. Esperar al final genera el new unlock code

### Desbloquear bootloader
Este proceso va a borrar toda la memoria del teléfono y volverá a iniciar como si fuera de fabrica.

```terminal
adb reboot bootloader
fastboot devices
fastboot oem unlock <code>
```

## Rootear

Instalar Magisk
```terminal
adb install <magisk_apk_name>.apk
```
1. Entrar en la aplicación
2. En la seccion Magisk, pulsar Instalar
3. Opciones de instalacion, Modo recovery, Siguiente
4. Metodo de instalacion, Seleccionar y parchar un archivo, Instalar
5. Selecciona el archivo recovery.img


### Parchear imagen de recovery

1. Descargar imagen al pc

```terminal
adb pull storage/sdcard0/Download/<name>
```
2. Reiniciar en modo fastboot

```terminal
adb reboot bootloader
```

3. Instalar imagen

```terminal
fastboot flash recovery_ramdisk <name>
```

## Notas finales

Una vez ya flasheado el recovery, es necesario iniciar en modo recovery, para que entre como root el telefono.

- Modo recovery: vlup + pwr
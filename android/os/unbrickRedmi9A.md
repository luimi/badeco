# Desbrickear Redmi 9A Dandelion

## Requerimientos
- Windows
- Drivers
- Python
- [SP Flash Tool](https://www.mediafire.com/file/12jwyyw2x9a0nch/unbrickblossom.zip/file)
- [Stock rom - fastboot](https://roms.miuier.com/en-us/devices/dandelion/)

## Proceso

### Boot loop, no recovery, no fastboot
Es necesario abrir el telefono y desconectar la bateria

### Flash

En el pack de unbrickblossom, en la carpeta Auth, ejecutar el bat RUN, dependiendo de la instalacion de python, es posible tener que modificar el comando en la primera linea.

```
python -m pip install pyusb json5
```

Cuando en la linea de comando se quede esperando el dispositivo, se debe conectar en BRUM mode

```
volUp + cable
```
Hasta que salga el mensaje de "protection disabled"

- Abre el flash tool
- Selecciona en Download-Agent el archivo DA_6765_6785_6768_6873_6885_6853.bin
- Selecciona en scatter-loading file el archivo MT6765_Android_scatter de la carpeta del stock rom dentro de images
- En el menu superior, Options, Option, Connection, selecciona el puerto, en baud rate 921600 y cerrar
- Click en Download y esperar a que termine

## Fuentes
[Nerd 404](https://www.youtube.com/watch?v=Yfm39SoLYtk)

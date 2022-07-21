# Root Nexus 5
## Requerimientos
- Fastboot
- TWRP
- [Archivos](https://download.chainfire.eu/363/CF-Root/CF-Auto-Root/CF-Auto-Root-hammerhead-hammerhead-nexus5.zip)

## Proceso

### Entrar en modo recovery

```
volup + voldown + power
```

### Usar el script
```
sh root-linux.sh
```

## Manualmente

### Hacer fastboot ejecutable

```terminal
sudo chmod +x tools/fastboot-linux 1>/dev/null 2>/dev/null
```

### Desbloquear bootloader

```terminal
sudo tools/fastboot-linux oem unlock 1>/dev/null 2>/dev/null
sudo tools/fastboot-linux oem unlock 1>/dev/null 2>/dev/null
sudo tools/fastboot-linux oem unlock-go 1>/dev/null 2>/dev/null
sudo tools/fastboot-linux oem unlock-go 1>/dev/null 2>/dev/null
sudo tools/fastboot-linux flashing unlock 1>/dev/null 2>/dev/null
sudo tools/fastboot-linux flashing unlock 1>/dev/null 2>/dev/null
```
### Rootear

```terminal
sudo tools/fastboot-linux boot image/CF-Auto-Root-hammerhead-hammerhead-nexus5.img
```

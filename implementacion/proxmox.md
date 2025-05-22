# Proxmox

## Instalación

- USB ~4gb

## Post instalacion

### Cerrar laptop

Configurar para poder cerrar la tapa del portátil

```bash
# Abrir documento de configuracíon
nano etc/systemd/logind.conf
# Descomentar y modificar estas lineas
handleLidSwitch=ignore
handleLidSwitchExternalPower=ignore
# Guardar y reiniciar el servicio
systemctl restart systemd-logind
```
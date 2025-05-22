# Proxmox

## Instalación

- USB ~4gb

## Post instalacion

### Puntos

- Verificar que pueda hacer boot sin la USB puesta
- Instalar PVE Post install desde [Aquí](https://community-scripts.github.io/ProxmoxVE/)

### Cerrar laptop

Configurar para poder cerrar la tapa del portátil

```bash
# Abrir documento de configuración
nano etc/systemd/logind.conf
# Descomentar y modificar estas lineas
handleLidSwitch=ignore
handleLidSwitchExternalPower=ignore
# Guardar y reiniciar el servicio
systemctl restart systemd-logind
```
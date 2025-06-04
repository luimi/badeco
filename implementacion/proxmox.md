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

### Conectar por wifi

En su totalidad usar esta [guía](https://github.com/ThomasRives/Proxmox-over-wifi)

> /etc/network/interfaces

```
auto wlp3s0
iface wlp3s0 inet static
        address 192.168.20.121/24
        netmask 255.255.255.0
        gateway 192.168.20.1
        dns-nameserver 8.8.8.8
        wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf

auto vmbr1
iface vmbr1 inet manual
        address 10.10.1.1/24
        bridge-ports none
        bridge-stp off
        bridge-fd 0
        post-up echo 1 > /proc/sys/net/ipv4/ip_forward
        post-up   iptables -t nat -A POSTROUTING -s '10.10.1.0/24' -o wlp3s0 -j MASQUERADE
        post-up iptables -t nat -A PREROUTING -i wlp3s0 -p tcp --dport 3389 -j DNAT --to-destination 10.10.1.10:3389
        post-down iptables -t nat -D POSTROUTING -s '10.10.1.0/24' -o wlp3s0 -j MASQUERADE
        post-down iptables -t nat -D PREROUTING -i wlp3s0 -p tcp --dport 3389 -j DNAT --to-destination 10.10.1.10:3389
        post-up   iptables -t raw -I PREROUTING -i fwbr+ -j CT --zone 1
        post-down iptables -t raw -D PREROUTING -i fwbr+ -j CT --zone 1
```

> /etc/dnsmasq.conf

```
interface=vmbr1
dhcp-range=10.10.1.10,10.10.1.20,255.255.255.0,12h
dhcp-option=3,10.10.1.1
```

> /etc/dnsmasq.d/static-ips.conf

```
dhcp-host=BC:24:11:25:B9:A0,10.10.1.10,DESKTOP-GQD6I93
```
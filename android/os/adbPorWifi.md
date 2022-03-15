# ADB por Wifi

## Requerimientos
- adb

### Iniciar dispositivo por tcpip
```terminal
adb tcpip 5555
```

### Conocer la ip al cual esta conectado
```terminal
adb shell ifconfig
```

### Conectar inhalambricamente
```terminal
adb connect {ip}:5555
```

### Desconectar
```terminal
adb disconnect {ip}
```
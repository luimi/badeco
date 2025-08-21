# Android en Docker

## Requerimientos
- Docker
- 10GB+ HDD
- 4GB+ RAM
- adb
- scrcpy

## Implementación

### Crear imagen de docker

```bash
git clone https://github.com/HQarroum/docker-android.git
cd docker-android
docker build   --build-arg API_LEVEL=36   --build-arg ARCHITECTURE=x86_64   --tag <Nombre> .
```

### Correr imagen
```bash
docker run -it --rm --device /dev/kvm -p 5555:5555 <Nombre>
```

### Conectarse

```bash
adb connect <ip>
```

### Visualizar

```bash
scrcpy
# O
scrycpy --tcpip=<ip>
```
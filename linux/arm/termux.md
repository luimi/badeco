## VNC

### Instalar

```
# xfce
pkg update -y && pkg install wget curl proot tar -y && wget https://raw.githubusercontent.com/AndronixApp/AndronixOrigin/master/Installer/Ubuntu22/ubuntu22-xfce.sh -O ubuntu22-xfce.sh && chmod +x ubuntu22-xfce.sh && bash ubuntu22-xfce.sh

# lxde
pkg update -y && pkg install wget curl proot tar -y && wget https://raw.githubusercontent.com/AndronixApp/AndronixOrigin/master/Installer/Ubuntu22/ubuntu22-lxde.sh -O ubuntu22-lxde.sh && chmod +x ubuntu22-lxde.sh && bash ubuntu22-lxde.sh

# lxqt
pkg update -y && pkg install wget curl proot tar -y && wget https://raw.githubusercontent.com/AndronixApp/AndronixOrigin/master/Installer/Ubuntu22/ubuntu22-lxqt.sh -O ubuntu22-lxqt.sh && chmod +x ubuntu22-lxqt.sh && bash ubuntu22-lxqt.sh
```

### Iniciar

```
./start-ubuntu*
vncserver-start
```

### Conectar

> vnc://{ip}:5901

## SSH

### Instalar

```
pkg install openssh
```

### Iniciar

```
sshd
```

### Conectar

> ssh {ip} -p 8022
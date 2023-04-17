## GIT

```bash
sudo apt-get install git -y
```

## SAMBA

### Instalar

```bash
sudo apt-get install samba samba-common-bin -y
```

### Configurar

```bash
sudo nano /etc/samba/smb.conf
[pimylifeupshare]
path = /home/pi/shared
writeable=Yes
create mask=0777
directory mask=0777
public=no
```

```bash
# Asignar contraseña al usuario
sudo smbpasswd -a pi
sudo systemctl restart smbd
```

## Mongo Tools

```bash
git clone https://github.com/mongodb/mongo-tools.git
cd mongo-tools/
sudo apt-get install golang -y
sudo apt-get install libkrb5-dev -y
./make build
echo 'PATH=$PATH:~/mongo-tools/bin' >> ~/.bashrc
```

## Desactivar IPV6

```
sudo nano /etc/sysctl.conf
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
net.ipv6.conf.lo.disable_ipv6 = 1
```
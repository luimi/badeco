## Proceso en background

## Iniciar

```
cat /dev/location > /dev/null &
```

## Detener

```
killall -9 cat
```

## SSH

### Instalar

```
apk add openssh
ssh-keygen -A
passwd
echo 'PermitRootLogin yes' >> /etc/ssh/sshd_config
```

### Iniciar

```
/usr/sbin/sshd
```
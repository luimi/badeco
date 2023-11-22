# Utilizar multiples cuentas de GIT del mismo servidor en un solo computador y diferentes llaves SSH.

## Proceso

Crear llave ssh, diferente a la predeterminada.

```
ssh-keygen -f {nombrellave}
```

Registrar llave en el servidor.

```
cat ~/.ssh/{nombrellave}.pub
```

Modificar la configuracion de ssh para usar la nueva llave, para el caso especifico.

> ~/.ssh/config

```
Host {host}
    HostName {servidor | gitlab.com | bitbucket.com | github.com}
    User git
    IdentityFile ~/.ssh/{nombrellave}
```

Para clonar debes reemplazar la url del servidor por la del host que creaste.

```
git clone git@{host}:work/repository.git
```
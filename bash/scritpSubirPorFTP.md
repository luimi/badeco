# Script para subir archivos por FTP

## Requerimientos
- terminal
- bash
- ftp

## Proceso
### script.sh
```bash
#!/bin/bash
HOST="ftp.host.com"
USER="usuario"
PASSWORD="clave"
DESTINATION="carpeta/destino/"
FROM="carpeta/de/archivos"
if ! [ -x "$(command -v ftp)" ]; then
  echo 'Error: ftp no esta instalado' >&2
  exit 1
fi
cd $FROM
ftp -inv $HOST <<EOF
user $USER $PASSWORD
cd $DESTINATION
binary
mput "archivos"
bye
EOF
```
### Reemplazar
- HOST
- USER
- PASSWORD
- DESTINATION
- FROM
- archivos (archivo.extension - carpeta/asterico - asterisco.extension)
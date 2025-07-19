# Ejecutar servidor php o web

## Requerimientos

- PHP
- Python3

## Script

```bash
#!/bin/bash

# Verificar si PHP está instalado
if command -v php &> /dev/null
then
    echo "PHP está instalado. Iniciando el servidor en localhost:8000..."
    php -S localhost:8000
# Si PHP no está instalado, verificar si Python3 está instalado
elif command -v python3 &> /dev/null
then
    echo "PHP no está instalado, pero Python3 sí. Iniciando el servidor en localhost:8000..."
    python3 -m http.server 8000
# Si ninguno está instalado, mostrar un mensaje de error
else
    echo "Ni PHP ni Python3 están instalados. No se puede iniciar un servidor web."
fi
```
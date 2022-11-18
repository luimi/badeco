# Menu de opciones

## Requerimientos
- Bash

## Script

```bash
#!/bin/bash
PS3='Escoge una de las opciones: '
options=("Opcion 1" "Opcion 2")
select opt in "${options[@]}"
do
    case $opt in
        ${options[0]})
            echo "Accion 1"
            ;;
        *) 
	    echo "Opción invalida"
	    ;;
    esac
done
```
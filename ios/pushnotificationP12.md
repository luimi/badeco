# Obtener el certificado .p12

## Requerimientos

- Cuenta de desarrollador de Apple
- MacOs
- Identifier de app

## Proceso

*En la web de developers*
Con el "Identifiers" ya creado, ingresas
Buscas push notification > Configure > Create (Dev o Prod)

*En el mac*
Abre la aplicacion "Acceso a Llaveros", abres el menu
Accesso a Llaveros> Asistente para certificados> Solicitar un certificado de una autoridad de certificacion...
Agrega Correo, nombre y selecciona "Seguarda en el disco"

*En la web*
seleccionas el certSigningRequest > continuar 
Descargas el certificado .cer y lo abres (Indentificar como de inicio de sesion)
Click derecho> Exportar> Cambiar formato de archivo por p12> Export
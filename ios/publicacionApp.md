# Publicación App IOS en Appstore

## Requerimientos

- correo electrónico - sin AppleID
- numero telefónico - sin AppleID

## Creación de AppleID

https://appleid.apple.com/

- Nombre
- Apellidos
- País
- Fecha de nacimiento
- Correo electrónico
- Contraseña
- País de numero telefónico
- Numero telefónico

### Verificación del DUNS

https://developer.apple.com/enroll/duns-lookup/

- País
- Nombre legal
- Dirección
- Ciudad
- Estado
- Código postal
- Numero telefónico
- Nombre personal
- Apellido
- Teléfono de trabajo
- Correo electrónico de trabajo

## Creación de DUNS  (empresa)

https://support.dnb.com/?CUST=APPLEDEV

### Registro a la plataforma 

- Primer nombre
- Primer Apellido
- Compañía
- Cargo en la compañía
- Teléfono
- Correo electrónico
- Dirección
- Ciudad
- Estado
- zip
- País

### Registro de nuevo DUNS
Todo referente a la compañía

- Nombre completo
- Nombre corto
- Teléfono
- Dirección física
- Piso, apartamento, suite
- Ciudad
- Estado, provincia
- Código postal
- País
- Estructura legal: Privada, Publica
- Nombre del propietario o CEO
- Titulo del CEO
- Url de la pagina web
- Es una compañía de hogar? Si o no
- Numero de empleados
- Fecha de inicio de la empresa

**Opcional**

- Clasificación industrial internacional SIC [Buscar](www.osha.gov/pls/imis/sicsearch.html)
- Sistema de clasificación industrial de América del Norte (NAICS) [Buscar](www.naics.com/search/)
- Certificado membretado por la empresa que contenga el nombre y dirección física

## Enrollment (empresa)
- Haber realizado la solicitud del DUNS - Esperar entre 7 y 14 días
- Al recibir el DUNS - Esperar 48 horas
- Iniciar enrollment con el DUNS recibido - Esperar correo de contacto
- En el correo ellos van a decir que quieren comunicarse contigo vía telefónica, puedes llamarlos a ellos o responderles el correo para que te llamen
- Realizar el pago - 99USD

## Publicación APP

### Certificados

> Certificates, Identifiers & Profiles> Identifiers> New> Apps IDs> App

- Description
- Bundle Id

### Nueva App
> App Store Connect> Go to App Store Connect > Mis Apps> New

- Plataformas: IOS, MacOS, tvOS
- Nombre Empresa
- Nombre App
- Idioma Principal
- Id de pack: seleccionar identifiers
- sku: nombre único
- Acceso de usuarios: limitado o ilimitado (bloquear o habilitar usuarios que - puedan ver el app)

### Información General
- Obligatorio > Nombre de la aplicación (Solo para la tienda) - 24 char max
- Opcional> Subtitulo de la aplicación - 30 char max
- Obligatorio> Categoría principal
- Opcional> Texto promocional - 170 char max
- Obligatorio> Descripción - 3687 char max
- Obligatorio> Palabras clave - 71 char max
- Obligatorio> Url de soporte
- Obligatorio> Url de marketing
- Obligatorio> Información para revisión (contacto nombre, teléfono, correo e indicaciones del uso del app)
- Obligatorio> capturas 6.5’’ (1284 × 2778 pixeles), 5.5’’ (1242 × 2208 pixeles iphone 8 plus), 12.9’’ (2048 × 2732 pixeles)

### Información del App

- Categoría
- Derechos sobre el contenido ¿Tu app contiene, muestra o accede a contenido de terceros?
- Clasificación 

```
Violencia de dibujos animados o violencia de fantasía
Violencia realista
Violencia prolongada de naturaleza realista sádica o de representación gráfica
Palabras groseras o humor vulgar
Temas para adultos/provocativos
Temas de terror/miedo
Información médica/sobre tratamientos
Consumo de alcohol, tabaco o drogas o referencias a ello
Simulación de apuestas
Contenido sexual o desnudez
Desnudez y contenido sexual gráfico
Concursos

¿Tu app contiene acceso web no restringido, por ejemplo, por medio de un navegador incorporado?
¿Tu app contiene instancias de apuestas?

Apta para menores
Restringir a 17+

```

### Precio y disponibilidad
- Precio
- Disponibilidad (países)

### Privacidad de la app
- ¿Tú o algún colaborador externo recopiláis datos de esta app?
- Política de privacidad - url

### Información sobre el cumplimiento de las leyes de exportación
- ¿Tu app usa encriptación?
- ¿Tu app cumple alguno de los requisitos para las exenciones indicadas en la Categoría 5, Parte 2 de las normas de la administración de exportaciones (Export Administration Regulations) de los Estados Unidos?


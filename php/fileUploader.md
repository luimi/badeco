# File Uploader script (PHPFILES)

## Requerimientos

- php

## implementacion

```php
<?php
// Configurar la cabecera para devolver una respuesta JSON
header('Content-Type: application/json');

// --- CONSTANTES EN LOCAL ---
define('PASSWORD_CORRECTA', 'TuContraseñaSegura123');
// Puedes cambiar este valor por la URL real de tu servidor (asegúrate de incluir la barra diagonal final '/')
define('rutaServidor', 'http://localhost:8000/'); 

// Función auxiliar para estructurar y enviar la respuesta JSON
function responder($success, $data = '') {
    $respuesta = ['success' => $success];
    
    if ($success) {
        $respuesta['path'] = $data;
    } else {
        $respuesta['message'] = $data;
    }
    
    echo json_encode($respuesta);
    exit; // Termina la ejecución del script
}

// 1. Validar que la petición sea por método POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    responder(false, 'Método no permitido. Se requiere POST.');
}

// 2. Validar el parámetro 'password'
$passwordRecibida = $_POST['password'] ?? '';

if ($passwordRecibida !== PASSWORD_CORRECTA) {
    responder(false, 'Contraseña incorrecta.');
}

// 3. Validar que el archivo 'file' exista y no tenga errores de subida
if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
    $errorMsg = 'No se recibió ningún archivo o hubo un error en la subida.';
    if (isset($_FILES['file']['error'])) {
        $errorMsg .= ' Código de error: ' . $_FILES['file']['error'];
    }
    responder(false, $errorMsg);
}

// 4. Configurar la ruta de destino local
$carpetaDestino = 'files/';

// Crear la carpeta si no existe
if (!is_dir($carpetaDestino)) {
    if (!mkdir($carpetaDestino, 0755, true)) {
        responder(false, 'Error interno: No se pudo crear la carpeta de destino.');
    }
}

// Obtener el nombre original del archivo
$nombreArchivo = basename($_FILES['file']['name']);
$rutaFinalLocal = $carpetaDestino . $nombreArchivo;

// 5. Mover el archivo y responder concatenando con la constante 'rutaServidor'
if (move_uploaded_file($_FILES['file']['tmp_name'], $rutaFinalLocal)) {
    // Concatenamos la URL del servidor con la ruta donde se guardó el archivo
    $urlCompletaArchivo = rutaServidor . $rutaFinalLocal;
    responder(true, $urlCompletaArchivo);
} else {
    responder(false, 'Error al intentar guardar el archivo en el servidor.');
}
``` 

## Uso

```javascript
const formdata = new FormData();
formdata.append("file", fileInput.files[0], "splash-wide.png");
formdata.append("password", "TuContraseñaSegura123");

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("http://localhost:8000/upload.php", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```
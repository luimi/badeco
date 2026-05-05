# mediaUploader script

## Requerimientos

- php

## Implementacion

```php
<?php
header('Content-Type: application/json');

// ===== CONFIGURACIÓN =====
$inputName = 'file';
$expectedPassword = 'mi_password_secreta'; // cambia esto
$baseUrl = 'http://localhost:8000'; // cambia esto

// Carpeta destino
$uploadDir = __DIR__ . '/assets/';

// Crear carpeta si no existe
if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

// ===== VALIDAR PASSWORD =====
if (!isset($_POST['password'])) {
    echo json_encode([
        'success' => false,
        'message' => 'Password requerido'
    ]);
    exit;
}

if ($_POST['password'] !== $expectedPassword) {
    echo json_encode([
        'success' => false,
        'message' => 'Password incorrecto'
    ]);
    exit;
}

// ===== VALIDAR ARCHIVO =====
if (!isset($_FILES[$inputName])) {
    echo json_encode([
        'success' => false,
        'message' => 'No se recibió ningún archivo'
    ]);
    exit;
}

$file = $_FILES[$inputName];

if ($file['error'] !== UPLOAD_ERR_OK) {
    echo json_encode([
        'success' => false,
        'message' => 'Error al subir el archivo'
    ]);
    exit;
}

// Obtener extensión
$originalName = $file['name'];
$extension = pathinfo($originalName, PATHINFO_EXTENSION);

// Generar nombre aleatorio
$randomName = bin2hex(random_bytes(16)) . '.' . $extension;

// Ruta final
$destination = $uploadDir . $randomName;

// Guardar archivo
if (move_uploaded_file($file['tmp_name'], $destination)) {
    $relativePath = $baseUrl . '/assets/' . $randomName;

    echo json_encode([
        'success' => true,
        'path' => $relativePath
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'No se pudo guardar el archivo'
    ]);
}
?>
```

## Uso

```javascript
const formdata = new FormData();
formdata.append("file", fileInput.files[0], "splash-wide.png");
formdata.append("password", "mi_password_secreta");

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
# phpMailer script

## Requerimientos

- php
- [phpMailer](https://github.com/PHPMailer/PHPMailer)

## Implementacion

Descargar el fuente y renombrar la carpeta a phpmailer

### Script
```php
<?php
// 1. Importar las clases al espacio de nombres global
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// 2. Cargar los archivos manualmente (ajusta la ruta según tu carpeta)
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

// Configuración de seguridad
define('API_PASSWORD', 'tu_password_seguro_aqui'); 

// 1. Validar que sea una petición POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Método no permitido"]);
    exit;
}

// 2. Recibir y validar parámetros
$destinatary = filter_input(INPUT_POST, 'destinatary', FILTER_VALIDATE_EMAIL);
$subject     = filter_input(INPUT_POST, 'subject', FILTER_UNSAFE_RAW);
$body        = $_POST['body'] ?? ''; // El body puede contener HTML, manejar con cuidado
$password    = $_POST['password'] ?? '';

if (!$destinatary || !$subject || empty($body) || empty($password)) {
    http_response_code(400);
    echo json_encode(["error" => "Campos obligatorios faltantes o inválidos"]);
    exit;
}

// 3. Validar Password de la API
if ($password !== API_PASSWORD) {
    http_response_code(401);
    echo json_encode(["error" => "No autorizado"]);
    exit;
}

// 4. Configuración de PHPMailer para el envío
$mail = new PHPMailer(true);

try {
    // Configuración del Servidor SMTP
    $mail->isSMTP();
    $mail->Host       = 'mail.domain.com'; // Servidor SMTP de tu hosting
    $mail->SMTPAuth   = true;
    $mail->Username   = 'user@domain.com';
    $mail->Password   = 'password';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    // Destinatarios
    $mail->setFrom('user@domain.com', 'Name');
    $mail->addAddress($destinatary);

    // Contenido del Correo
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $body;
    $mail->AltBody = strip_tags($body); // Versión en texto plano

    $mail->send();
    echo json_encode(["success" => "Correo enviado correctamente"]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => "Error al enviar: {$mail->ErrorInfo}"]);
}
```
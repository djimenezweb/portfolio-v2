<?php
// Filtrar spam
if(!empty($_POST['areyouarobot'])) die();

// Campos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

// Correo electrónico al que se envía el formulario
$from = "info@djimenezweb.com";
$to = "djimenezweb@gmail.com";
$subject = "Formulario enviado por correo";
$message = " NOMBRE: " . $nombre . " EMAIL: " . $email . " MENSAJE: " . $mensaje;
$headers = "From:" . $from;

@mail($to, $subject, $message, $headers);
// A qué página se redirige una vez se ha enviado el formulario:
header('Location: index.html');
?>
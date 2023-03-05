<html>
 <head>
  <title>FORMULARIOS - LMSGI</title>
 </head>
 <body>

<?php
// subimos un solo archivo
print "<pre>"; print_r($_REQUEST); print "</pre>\n";
echo "<p> ----------------------------- </p>"; 
echo "<p> ----------------------------- </p>";
print "<p>Su nombre es $_REQUEST[nombre]</p>\n";
print "<p>apellidos: $_REQUEST[apellido]</p>\n";
echo "<p> ----------------------------- </p>";
print "<p>Correo:  $_REQUEST[correo]</p>\n";
print "<p>Dni: $_REQUEST[dni]</p>\n";
echo "<p> ----------------------------- </p>";
print "<p>Genero: $_REQUEST[genero]</p>\n";
print "<p>Estudios: $_REQUEST[estudios]</p>\n";
echo "<p> ----------------------------- </p>";

print "<p>Aficiones: $_REQUEST[aficion]</p>\n";
 

 
$target_dir = "subidas/"; // Directorio donde se almacenará el archivo
$target_file = $target_dir . basename($_FILES["fichero1"]["name"]); // Nombre del archivo
print "<p>Ficheros: $target_file</p>\n";

echo "<p> ----------------------------- </p>";
// Verificar si el archivo ya existe en el servidor
if (file_exists($target_file)) {
  echo "El archivo ya existe.";
} else {
  // Mover el archivo desde la carpeta temporal al directorio de destino
  if (move_uploaded_file($_FILES["fichero1"]["tmp_name"], $target_file)) {
    echo "El archivo ". htmlspecialchars( basename( $_FILES["fichero1"]["name"])). " ha sido subido.";
  } else {
    echo "Ha ocurrido un error al subir el archivo.";
  }
}

?>

<p>Comprueba tus datos antes de enviarlos, si no están bien vuelve a escribirlos.</p>
 </body>
</html>

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


  $target_dir = "subidas/"; // Directorio donde se almacenarán los archivos
  $total_files = count($_FILES["fichero"]["name"]); // Número total de archivos

  // Loop a través de todos los archivos subidos
  for($i=0; $i<$total_files; $i++) {
    $target_file = $target_dir . basename($_FILES["fichero"]["name"][$i]); // Nombre del archivo
     echo "El archivo $target_file --";
    // Verificar si el archivo ya existe en el servidor
    if (file_exists($target_file)) {
      echo "El archivo ". htmlspecialchars( basename( $_FILES["fichero"]["name"][$i])). " ya existe.<br>";
    } else {
      // Mover el archivo desde la carpeta temporal al directorio de destino
      if (move_uploaded_file($_FILES["fichero"]["tmp_name"][$i], $target_file)) {
        echo "El archivo ". htmlspecialchars( basename( $_FILES["fichero"]["name"][$i])). " ha sido subido.<br>";
      } else {
        echo "Ha ocurrido un error al subir el archivo ". htmlspecialchars( basename( $_FILES["fichero"]["name"][$i])). ".<br>";
      }
    }
  }
?>

<?php
  $target_dir = "subidas/"; // Directorio donde se almacenarán los archivos
  $total_files = count($_FILES["fileUpload"]["name"]); // Número total de archivos

  // Loop a través de todos los archivos subidos
  for($i=0; $i<$total_files; $i++) {
    $target_file = $target_dir . basename($_FILES["fileUpload"]["name"][$i]); // Nombre del archivo

    // Verificar si el archivo ya existe en el servidor
    if (file_exists($target_file)) {
      echo "El archivo ". htmlspecialchars( basename( $_FILES["fileUpload"]["name"][$i])). " ya existe.<br>";
    } else {
      // Mover el archivo desde la carpeta temporal al directorio de destino
      if (move_uploaded_file($_FILES["fileUpload"]["tmp_name"][$i], $target_file)) {
        echo "El archivo ". htmlspecialchars( basename( $_FILES["fileUpload"]["name"][$i])). " ha sido subido.<br>";
      } else {
        echo "Ha ocurrido un error al subir el archivo ". htmlspecialchars( basename( $_FILES["fileUpload"]["name"][$i])). ".<br>";
      }
    }
  }
?>

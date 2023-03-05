<?php
if (isset($_FILES['archivo1']) && isset($_FILES['archivo2'])) {
    $archivo1 = $_FILES['archivo1'];
    $archivo2 = $_FILES['archivo2'];

    // Validar los archivos aquí...
    
    echo "Se han subido los archivos: " . $archivo1['name'] . " y " . $archivo2['name'];
  } else {
    echo "Por favor, seleccione dos archivos para subir.";
  }
// Verificar si se ha enviado el formulario
if (isset($_POST['submit'])) {
echo "hemos llegado";
  // Verificar si se ha seleccionado un archivo 1
  if (!empty($_FILES['archivo1']['name'])) {
    // Procesar el archivo 1
    $archivo1 = $_FILES['archivo1']['name'];
    $temp1 = $_FILES['archivo1']['tmp_name'];
    // Validar el archivo 1 (por ejemplo, verificar el tipo o el tamaño)
    if ($_FILES['archivo1']['type'] !== 'image/jpeg') {
      echo "El archivo 1 debe ser una imagen JPEG.";
    } else if ($_FILES['archivo1']['size'] > 5000000) {
      echo "El archivo 1 es demasiado grande. El tamaño máximo es 5MB.";
    } else {
      move_uploaded_file($temp1, "subidas/" . $archivo1);
      echo "El archivo 1 se ha cargado correctamente.";
    }
  }

  // Verificar si se ha seleccionado un archivo 2
  if (!empty($_FILES['archivo2']['name'])) {
    // Procesar el archivo 2
    $archivo2 = $_FILES['archivo2']['name'];
    $temp2 = $_FILES['archivo2']['tmp_name'];
    // Validar el archivo 2 (por ejemplo, verificar el tipo o el tamaño)
    if ($_FILES['archivo2']['type'] !== 'image/jpeg') {
      echo "El archivo 2 debe ser una imagen JPEG.";
    } else if ($_FILES['archivo2']['size'] > 5000000) {
      echo "El archivo 2 es demasiado grande. El tamaño máximo es 5MB.";
    } else {
      move_uploaded_file($temp2, "subidas/" . $archivo2);
      echo "El archivo 2 se ha cargado correctamente.";
    }
  }
}
echo "Hemos terminado";
?>
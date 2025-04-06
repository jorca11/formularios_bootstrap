function mostrarError(mensaje) {
    document.getElementById("errores").innerHTML = mensaje;
  }
  
  // comprobar dni
  function comprobarNIF() {
    const nif = document.getElementById("nif").value;
    const nifVerificado = ajustarNIF(nif);
    
    if (!nifVerificado) {
      return false;
    }
  
    const resultado = comprobarLetraNIF(nifVerificado);
    return resultado;
  }
  
  function ajustarNIF(nif) {
    if (nif.length === 8) {
      nif = "0" + nif;
    } else if (nif.length !== 9) {
      mostrarError("La longitud del NIF debe ser de 8 o 9 dígitos.");
      return false;
    }
    return nif;
  }
  
  function comprobarLetraNIF(nif) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const letraEsperada = letras.charAt(parseInt(nif.substr(0, 8)) % 23);
    const letraIngresada = nif.charAt(8).toUpperCase();
  
    if (letraEsperada !== letraIngresada) {
      mostrarError("La letra del NIF no es correcta. Debería ser: " + letraEsperada);
      return false;
    }
  
    mostrarError("El NIF es válido."); // también se puede quitar si no quieres mostrar mensajes correctos
    return true;
  }
  
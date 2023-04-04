//fichero JAVASCRIPTpara validar campos y otros aspectos
window.onload = function () {
  //  alert("Bienvenido al Formulario");

  var fechaActual = new Date();
  var dia = fechaActual.getDate();
  var mes = fechaActual.getMonth() + 1; // empieza en el mes 0
  var anno = fechaActual.getFullYear();

  if (dia < 10) { //el dia tres seria 3 y no 03
    dia = '0' + dia;
  }

  if (mes < 10) {
    mes = '0' + mes;
  }

  var fechaConFormato = anno + '-' + mes + '-' + dia;
  // localizar el campo fecha y poner como valor el que hemos creado con el objeto
  document.getElementById("fecha").value = fechaConFormato;


}
// cargar variables o valores al momento de iniciar el formulario
//keydown es un evento que indica que se ha tocado una tecla en el teclado
document.addEventListener('keydown', function (event) {
  //el argumento que toma la función es event
  if (event.code === "F7") {
    //event.code es la cadena de caracteres que identifica la tecla
    //event.keyCode es el código numérico de la tecla presionada (obsoleto)
    window.open("https://portal.edu.gva.es/iessalvadorgadea/", "_blank"); // abrimos ventana sin contenido

  }
  // si ha tocado el escape
  if (event.code === 'Escape') {
    alert("ha tocado el escape");
  }
});
/* valores de las teclas al utilizar event.code
"KeyA", "KeyB", "KeyC", etc.: las letras del teclado, en mayúsculas.
"Digit0", "Digit1", "Digit2", etc.: los números del teclado.
"Enter": la tecla Enter.
"Tab": la tecla Tab.
"Space": la barra espaciadora.
"Backspace": la tecla de retroceso.
"ShiftLeft", "ShiftRight": las teclas Shift izquierda y derecha.
"ControlLeft", "ControlRight": las teclas Control izquierda y derecha.
"AltLeft", "AltRight": las teclas Alt izquierda y derecha.
"ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight": las teclas de flecha arriba, abajo, izquierda y derecha.
F1 a F12: teclas de función F1 a F12
"CapsLock": tecla Bloq Mayús (Caps Lock)
"Escape": tecla Escape (Esc)
"Insert" o "Ins": tecla insertar
"Delete" o "Del": tecla borrar
"Home". tecla inicio
"End": Tecla fin
"PageUp" o "Prior": tecla REPAG
"PageDown" o "Next": tecla AVPAG
*/

/* ************************************ */
/* ------- validamos campos -----------*/
//validamos el campo apellido, transformando a mayúsculas su contenido al cambiar
function apellidosMayuscula(apellidos) {
  apellidos.value = apellidos.value.toUpperCase();
  // alert(apellidos.value);
}

/* **************************************************** */

// validamos el correo utilizando expresiones regulares
function validarCorreo(email) {
  //con este constructor RegExp  creamos un objeto de expresión regular
  // la misma nos vale para poder validar de forma completa un correo
  var correoRegex = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
  // otra forma es escribir la cadena directamente

  //var correoRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // comprobamos con test si la cadena o string que contiene lo introducido
  // por el usuario en el correo cumple con las normas de la expresión regular
  // que hemos creado en correoRegex
  if (!correoRegex.test(email)) {
    alert("El email no es válido.");
    //  email.value="";
    //devolvemos el foco al dni
    document.getElementById("dni").focus();
    //para evitar entrar en bucle
    return false;
  }
  else {
    //  alert("correo bueno");
    return true;
  }
}

// Si queremos realizar la validación de todos los campos
//utilizando las diversas funciones
function validarFormulario() {
  alert("vamos a validar");
  //vamos a validar algunos campos para comprobar cómo se haría con todos si fuera necesario
 const esDniValido = comprobarNIF();
  const esCheckValido = validarCheckbox();
  return esCheckValido && esDniValido;

}

// comprobar dni
function comprobarNIF() {
  const nif = document.getElementById("nif").value;

  alert("el nif es:" + nif);
  //try: envolver el código que puede lanzar una excepción. Es decir, si prevemos una excepción utilizamos este tipo de estructura
  // dentro realizamos las instrucciones o funciones para obtener una respuesta
  // la respuesta puede ser un error generado por el objeto throw new error o la respuesta
  // en la primera función retornamos el nif, en la segunda un valor booleano
  try {//se usa para manejar errores o excepciones
    const nifVerificado = ajustarNIF(nif); //comprobamos si el nif tiene 9 caracteres
    const resultado = comprobarLetraNIF(nifVerificado);
    alert("El NIF es válido.");
  } catch (error) {
    //en caso de que cualesquiera de las funciones anteriores hubieran capturado un nuevo objeto con error
    // en el apartado catch se mostraría el error
    alert(error.message);
    return false;
    //Una de las propiedades más comunes del objeto Error es message, 
    //que es una cadena de texto que contiene una descripción de la excepción que se ha producido. 
    //El valor de la propiedad message se puede establecer cuando se crea una instancia de Error mediante la sentencia throw new Error("mensaje"), 
    //y se puede acceder a él mediante la propiedad message del objeto Error.
  }
}
function ajustarNIF(nif) {
  if (nif.length === 8) {
    nif = "0" + nif;
  } else if (nif.length !== 9) {
    //se crea una instancia de la clase Error con un mensaje de error personalizado que se pasa como argumento. 
    //El objeto Error se lanza mediante la sentencia throw.
    throw new Error("La longitud del NIF será de 8 o 9 dígitos.");
    //una instancia es un objeto que se crea a partir de una clase utilizando la palabra clave new. 
    //Cada instancia de una clase es un objeto único que tiene su propio conjunto de propiedades y métodos.
  }
  return nif;
}

//aspectos a conocer para calcular la letra del NIF
// La letra se obtiene del resto de dividir nuestro número del DNI entre 23. El resultado se obtiene de la siguiente tabla
//no se utilizan las letras "I", "Ñ", "O" y "U". 
//Estas no se usan para no ser confundidas con dígitos numéricos o por su similitud gráfica con otras letras.
/*   0 T
     1 R
     2 W
     3 A
     4 G
     5 M
     6 Y
     7 F
     8 P
     9 D
     10 X
     11 B
     12 N
     13 J
     14 Z
     15 S
     16 Q
     17 V
     18 H
     19 L
     20 C
     21 K
     22 E */
/* 1 2 3 4 5 6 7 8 L */
/* ARRAYS COMIENZA EN EL INDICE 0 */
/* SUBSTR ES TOMAR UNA CADENA DE ELEMENTOS DE UN STRING DESDE UNA POSICIÓN A OTRA */
function comprobarLetraNIF(nif) {
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  // letras es un array con las letras posibles del NIF
  //nif.substr(0,8) toma los caracteres o números de la posición 0 a la 7 (8 posiciones) del array
  //parseInt: Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada
  // % es el resto de una división
  //alert("el dni es "+nif.substr(0, 8)+" .. "+nif.charAt(9).toUpperCase());
  const letra = letras.charAt(parseInt(nif.substr(0, 8)) % 23);
  //charAt; se usa para localizar una posición concreta de un array tipo string
  if (letra !== nif.charAt(8).toUpperCase()) {
    // comprobamos que la letra de la posición 9 (convertida a mayúsculas) es igual a la correspondiente del resto de la división
    throw new Error("No es correcta la letra del NIF, le corresponde " + letra);
    return false;
  } else {
    throw new Error("CORRECTO!");
  }
  return true;
}

// validar un checkbox con varias opciones
function validarCheckbox() {
  const listaElementos = document.getElementsByName("derechos[]"); // recordemos que para php debemos declarar el name como array
  let marcados = 0; // variable para contar cuantos están marcados
  //  alert("Elementos: "+listaElementos.length);
  for (var i = 0; i < listaElementos.length; i++) {
    if (derechos[i].checked) { //comprobamos que en esa posición del array tiene un checked
      //  alert(derechos[i].value);
      marcados++; // vamos contando cuantos ha marcado el cliente
    }
  }

  if (marcados < 3) {
    alert("Debe seleccionar los tres elementos");
    return false;
  }

  return true;
}

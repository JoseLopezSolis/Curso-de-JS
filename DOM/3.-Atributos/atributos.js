//Seleccionar por atributos en JS
//*setAttribute - Modifica el valor de un atributo
//*getAttribute - Obtiene el valor de un atributo
//*removeAttribute - Elimina un atributo
const inputText = document.getElementById('inputText'); //PARA VER LOS ATRIBUTOS DEL ELEMENTO EN JS, LO SELECCIONAMOS Y EN CONSOLA '$0' Y NOS DEVUELVE EL ELEMENTO

//Modificamos el atributo value
//SINTAXIS (setAtribute('nombre del atributo','valor del atributo'))
inputText.setAttribute('value',''); //Cambiamos el valor del input
inputText.setAttribute('type','text'); //Cambiamos el tipo de input a password
inputText.setAttribute('placeholder','Ingresa tu contraseña'); //Cambiamos el placeholder
inputText.setAttribute('class','form-control'); //Cambiamos la clase
inputText.setAttribute('style','background-color: #fff; color: blue;'); //Cambiamos el estilo
inputText.setAttribute('required',''); //Hacemos que el input se requeridoa

//Obtenemos el valor del atributo
//SINTAXIS (getAttribute('nombre del atributo'))
document.write("<br><br> <b>Obtenemos el valor del atributo del placeholder</b>: "+inputText.getAttribute('placeholder'));
document.write("<br><br> <b>Obtenemos el valor del atributo del type</b>: "+inputText.getAttribute('type'));
document.write("<br><br> <b>Obtenemos el valor del atributo del class</b>: "+inputText.getAttribute('class'));
document.write("<br><br> <b>Obtenemos el valor del atributo del style</b>: "+inputText.getAttribute('style')+'<br>');

//Eiminamos el atributo 
document.write("<br><br> <b>Eliminamos el atributo type</b>: "+inputText.removeAttribute('type'));
document.write("<br><br> <b>Obtenemos el valor del atributo del type</b>: "+inputText.getAttribute('type'));

/*PARA PEDIR DATOS EN JS SE UTILIZA prompt */
let nombre;

nombre = prompt("Ingresa tu nombre:"); /*Le declaramos un prompt a la variable nombre */

function saludar(nombre){ /*creamos una funcion saludar*/
    alert("Hola "+nombre); /*alert para desplegarlo en panntalla */
}

saludar(nombre); /*Mandamos a llamar la funcion */
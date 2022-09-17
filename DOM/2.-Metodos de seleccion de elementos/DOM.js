//*Metodos de seleccion de elementos en JS
/*  getElementById
    getElementsByClassName
    getElementsByTagName
    querySelector
    querySelectorAll
*/

const parrafo = document.getElementById('parrafo'); 
const parrafos = document.getElementsByTagName('p');
const parrafoQuery = document.querySelector('#parrafo');
const contenedorQuery = document.querySelector('.contenedor');
const parrafosQuery = document.querySelectorAll('.contenedor');

//Seleccionamos los objetos con HTML

//HASTA AHORA SI IMPRIMIMOS SOLO LA VARIABLE SOLO NOS DEVUELVE EL OBJETO

//Nos regresa el tipo de elemento de HTML
document.write("<b>Objeto parrafo</b>: "+parrafo+"</br></br>");

 //Nos devuelve una coleccion de elementos 
document.write("<b>Objeto parrafos con tagname</b>: "+parrafos+"<br><br>");

//Nos devuelve el primer elemento
document.write("<b>Primer elemento objeto parrafo</b>: "+parrafos[0]+"<br><br>"); 

//Seleccionamos por query selector
document.write("<b>Query selector</b>: "+parrafoQuery+"<br><br>"); 

//Seleccionamos por query selector
document.write("<b>Contenedor con query selector</b>: "+contenedorQuery+"<br><br>");

//Seleccionamos por query selector todos los elemetos que coincidan con la clase contenedor
//Nos devuelve una coleccion de elementos (Lista de nodos)
document.write("<b>Parrafos con quey selector all</b>: "+parrafosQuery+"<br><br>"); 
//
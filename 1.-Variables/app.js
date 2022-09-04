/*TIPOS DE VARIABLES EN JS*/
/*let es el mas usado para inicializar una variable - alcance local*/
/*var para inicializar variables - alcance global*/
/*const para hacer constantes */

let nombre = "Jose"; /*Se puede modificar */
var edad = 19; /*Se puede modificar */
const pi = 3.1416; /*No se puede modificar */

const saludar = (person) =>{
    console.log("Hola "+person);
}

saludar("pedro");

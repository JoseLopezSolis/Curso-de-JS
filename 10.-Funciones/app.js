//Variables functions
const saludar = function saludar(){ //Funciones declaradas a constantes
    console.log("Hello user");
}
saludar()

//Arrow functions
let randomName = "Pepe";
const saludar2 = (nombre)=>{ //Function is repleaced for "()=>"
    console.log("Hola como estas "+nombre)
}
//Do a function more small
const saludar3 = randomName => console.log("Hello world "+randomName); //1 line function

saludar2(randomName)
saludar3(randomName)
//METODOS DE CADENAS DE TEXTO
let cadena="cadena de prueba prueba";
let cadena2=" cadena 2"

//Metodo para saber el index o contenido de lo strings
console.log(cadena.concat(cadena2)) //concatenamos 2 cadenas con un metodo
console.log(cadena.startsWith("cadena"))//Si la cadena empieza con ese string devuelve true or false
console.log(cadena.endsWith("prueba"))//Si la cadena termina con ese string devuelve true or false
console.log(cadena.includes("de"))//Encuentra la cadena si la encuentra da true sino da false
console.log(cadena.indexOf("d"))//Nos devuelve el index donde se encuentra la letra
console.log(cadena.lastIndexOf("prueba"))//Nos devuelve el index donde se encuentra la ultima palabra o letra


//Metodos para rellenar strings
let string1 = "abc"
console.log(string1.padStart(5,"a"));//Rellena al principio del string con los char que quieras, indicas cantidad que tenga todo el string
console.log(string1.padEnd(5,"c"));//Rellena al principio del string con los char que quieras, indicas cantidad que tenga todo el string
console.log(string1.repeat(5));//Repite el string las veces que le indiques

//Metodos para modificar el contenido del stringç
let cadenaNueva = "Hola como estas";
console.log(cadenaNueva.split("Hola")); //Crea un array y quita la cadena que le indicas del string
console.log(cadenaNueva.substring(0,5));//Takes the begin index and end of the string and return it as a string;
console.log(cadenaNueva.toLocaleLowerCase()); //Convert the string to lower case
console.log(cadenaNueva.toUpperCase()); //Conver the string to upper case
console.log(cadenaNueva.replace(/^\w/, (c) => c.toUpperCase())); //Convert the string to capitalize (the first letter in upper case)
let numCadena = 3455
let stringCadena = numCadena.toString(); //Convert any type of data in string

let arrayOfWords = ["first","second"];
let result = arrayOfWords.toString();//Convert any type of data in string (to manage arrays aswell)
console.log(result[0]);

let anyString = "caracteres";
console.log(anyString.length); //Give me the number of characters that has the string.
let stringWithSpaces = "   remove spacess  "
console.log(stringWithSpaces.trim()); //Method that remove spaces
console.log(stringWithSpaces.trimStart());//Method that remove start spaces
console.log(stringWithSpaces.trimEnd());//Method that remove end spaces


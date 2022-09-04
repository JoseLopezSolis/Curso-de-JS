/*
|ARRAYS METHODS|
*/

/*Metodos tranformadores*/
let nombres = ["Jose","Pedro","Maria","pepe"];
console.log("Original array:"+nombres)
console.log("Array with pop:"+nombres.pop()+" "+nombres);//Delete the last element of the array (Return the element droped)
console.log("Array with shift:"+nombres.shift()+" "+nombres)//Delete the first element of the array (Return the element droped)
console.log("Array with push:"+nombres.push("pepeboss")+" "+nombres)//Add element to the array (return the position of off added)
console.log("Array with reverse:"+nombres.reverse()+" "+nombres)//Invert the order of the elements
console.log("Array with unshift:"+nombres.unshift("Anthony")+" "+nombres)//Add elements in at the beginign
console.log("Array with sort:"+nombres.sort())//Order the elements in dictionary or numeric order
console.log(nombres);
console.log("Array with splice:"+nombres.splice(0,2))//Delete elements giving begin and end parameter
console.log(nombres);
console.log("Array with splice:"+nombres.splice(0,0,"Carmen"))//Also can add element to the list (add at the begining)
console.log(nombres);

/*Metodos accesores*/
let newArray = ["Something","Algo","thisname","nose"]
let resultado = newArray.join('\n Elemento:'); //Convert the array in string (it can be separated if you write inside the brackets)
console.log(resultado);

console.log(newArray.slice(0,2))//Return the elements from the begin to the end indicated inside the brackets - Return as an object
console.log(newArray.slice(0,-1))//Return all elements, just the last no (Other way to use it)

console.log(newArray.includes("Something"));//If the list contain the element mentioned, will be true else will be false
console.log(newArray.indexOf("Algo")); //Return the index of the element mentioned else |when is not found(return -1 as a flag)
console.log(newArray.lastIndexOf("nose"));//Return the index of the element mentioned |when is not found(return -1 as a flag)

/*Metodos de repeticion*/

let aNewArray = ["some","words","in","array"]

//Go througt the list (check if the list has more than 2 elements inside)
let resultadoFilter = aNewArray.filter(numero => numero.length>2) 
console.log(resultadoFilter); //Print the result

//Go trhough a list and return the list in uppercase with map
let resultadoMap = aNewArray.map(numero => numero.toUpperCase())
console.log(resultadoMap);
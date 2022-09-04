//In this chapter we are going to see the functions that has the console in javascript

//Register functions in the console
console.assert(5>4);//It's not goint to print nothing(because its ture);
console.assert(5<6);//It's going to print an error(because it's false);

console.clear(); //To clean the console;

console.error("This is an error message");//To print an error;

console.info("This is an iformative message");//To print an info;

console.log("Depuration message");//To print a message;

console.table([1,2,3,4,5,6]);//To print a table;

console.warn("This is a warning message");//To print a warning;

console.dir([12,3,3,5,56,6,56]);//To print a analitics of the list you give;


//Cout functions in the console
function sumarNumeros(){ //Function example to taste console.cout()
    console.log('Sumando numeros');
    console.count("probando funcion");
}

sumarNumeros();
sumarNumeros();
sumarNumeros();
sumarNumeros();
sumarNumeros();
sumarNumeros();

console.countReset();//To reset the counter;

console.group()//To create a group to try something
console.groupEnd()//To close the current group

console.time(); //It's going to start couting the time
console.timeLog(); //Show the time 
console.timeEnd(); //End to counting


//ADD COLOR TO CONSOLE
console.log("%cText in red","color:red;padding:20px") //Add styles at your console.log
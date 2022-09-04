//DIFERENTS TYPES OF FOR IN JS
for(i=1;i<=10;i++){ //Conventional for in JS
    console.log(i+"<br>")
}

let animales = ["Perro","Gato","Raton"]

for(let indexAnimal in animales){ //indexAnimal takes index of animales array
    console.log(animales[indexAnimal]+"<br>")
}


let personas = ["Pedro","Paco","Pedro"]

for(let valuesPersonas of personas){ //valuesPersonas takes the value of an array 
    console.log(valuesPersonas+"<br>")
}


let famousPeople = ["Mark Henry","Steve Aoki","Justin Biber"]
let famousPeople2 = ["Sherk","Drake","Walter White"]

labelOFor: //Labels o etiquetas en JS para nombrar el for y terminar donde queramos
for(let array in famousPeople){ //will going to run until end the elements of the array.
    if (array == 1){
        console.log(famousPeople[array]+" Esta en la posicion 2 del array")
        for(let array2 in famousPeople2){
            if (array2 == 2){
                console.log(famousPeople2[array2]+" Esta en la posicion 2 del array")    
                break labelOFor        
            }
        }
    }
    else{
        console.log(famousPeople[array])
    }
}

let things1 = ['PC','Monitor','Impresora']
//Go through a list in JS
for(index in things1){
    console.log(index+' '+things1[index]);
}

//Giving an array rewrite the array in contrary order
let str = 'hello world';
let strLetters = str.length;
strLetters = strLetters-1;
let array = ['h','e','l','l','o',' ','w','o','r','l','d'];

console.log(strLetters);

for(i=strLetters;i>=0;i--){
    var stringArray = []
    var arrayConcatenated = stringArray.concat(array);
}

console.log(arrayConcatenated)
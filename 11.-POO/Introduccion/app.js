//PROGRAMACION ORIETADA A OBJETOS
class animal{
    constructor(especie,edad, color){ //Le pasamos los parametros que quiere que contenga nuestra clase
        //Usamos this para seleccionar el objeto
        //Atributos de la clase
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }

    //Metodo para ver informacion
    verInformacion = ()=>{
        document.write(this.informacion+"<br>");
    }
}
let perro = new animal("perro",10,"Rojo"); //Declaramos un objeto con atributos
perro.verInformacion(); //Mandamos a llamar a un metodo

/*
document.write(perro.especie+"<br>");
document.write(perro.edad+"<br>");
document.write(perro.color+"<br>");
document.write(perro.informacion);
*/

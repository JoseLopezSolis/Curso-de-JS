/*
ABSTRACCION: Reducir lo mas posible un objeto
MODULARIDAD: Resolver un problema grande en diferentes partes
ENCAPSULAMIENTO: Hacer que los datos esten privados, encapsular los datos
POLIMORFISMO: Ver como un objeto se comporta de manera distinta por sus propiedades
*/

class animal{
    constructor(especie,edad,color){
        this.especie=especie;
        this.edad=edad;
        this.color=color;
        this.info = `Mi especie es ${this.especie} tengo ${this.edad} y mi color es ${this.color}`;
    }

    //CREACION DE METODOS
    verInfo(){
        if(this.especie=="perro"){
            document.write(this.info+`y la raza del perro es ${this.raza}`)
        }else{
            document.write(this.info);
        }
    }
    /*EJEMPLO DE POLIMORFISO
    ladrar(){M
        if(this.especie == "Perro"){
            document.write("!WAW!"+"</br>");
        }else{
            document.write("Este animal no puede ladrar ya que es "+this.especie)
        }
    }
    */
}

    //EJEMPLO DE HERENCIA
class perro extends animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza=null;
    }
    //METODOS ESTATICOS --Nos sirven para llamarlos sin instanciar un objeto
    /*static ladrar(){
        if(this.especie=="perro" || this.especie=="Perro"){
            alert("!WAW!");
        }else{
            alert(`${this.especie} no ladra.`)
        }
    }*/
    //SETTER para modificar la raza
    set setRaza(newName){
        this.raza=newName;
    }
    
    get getRaza(){
        return this.raza
    }
}

const perro1 = new perro("Perro",10,"Rojo","Doberman");
const gato = new perro("Gato",5,"negro");

perro1.setRaza="Gato"; //Metodo con set se debe asignar como propiedad.
document.write(perro1.getRaza);
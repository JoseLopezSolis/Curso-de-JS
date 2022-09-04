class Carro {
    constructor(marca, modelo, color, tipo, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.tipo = tipo;
        this.precio = precio;
    }

    obtenerInformacion(){
        document.write(`Marca del asuto: <strong>${this.marca}</strong>`);
        document.write(`<br>`)
        document.write(`Modelo del auto: <strong>${this.modelo}</strong>`);
        document.write(`<br>`)
        document.write(`Color del auto: <strong>${this.color}</strong>`);
        document.write(`<br>`)
        document.write(`Tipo de el auto: <strong>${this.tipo}</strong>`);
        document.write(`<br>`)
        document.write(`Precio del auto auto: $<strong>${this.precio}</strong>`);
    }
}

const carro1 = new Carro("Mercedez","BGA","Gris obscuro","Carro pista",10000);
document.write(carro1.obtenerInformacion());

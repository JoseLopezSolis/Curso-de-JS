//Guardamos los helados en un array asociativo
const helados = {
    heladoAgua: 0.6,
    heladoCrema: 1,
    heladoHeladix: 1.6,
    heladoHeladovich: 1.7,
    heladoHelardo: 1.8,
    heladoPotecito: 3,
    heladoPote: 2.9,
}

//Pedimos el dinero al usuario

function comprarHelado(dinero,helados){
    var nombreHelados = [];
    var precioHelados = [];

    //Guardamos los nombres de los helados en un array
    //Guardamos los precios de los helados en un array
    for(nombreHelado in helados){
        nombreHelados.push(nombreHelado);
        precioHelados.push(helados[nombreHelado]);
    }
    var heladoMasCaros = [];
    var heladoComprar;

    //Obtenemos los helados mas caros que podemos comprar
    for(precio in precioHelados){
        if(dinero >= precioHelados[precio]){
            heladoMasCaros.push(precioHelados[precio]);
        }
    }

    //Obtenemos la lista de los helados que podemos comprar
    for(masCaro in heladoMasCaros){
        let preciosHelados = heladoMasCaros[masCaro];
        heladoComprar = Math.max(preciosHelados);
    }

    //Ontenemos el nombre del helado mas caro que podemos comprar
    var comprarseHelado;
    var cambio = 0;
    for(comprarHelado in helados){
        if(helados[comprarHelado] == heladoComprar){
            cambio = dinero-helados[comprarHelado];
            comprarseHelado = comprarHelado;
            break;
        }
    }
    console.log("El helado mas caro que se puede comprar es: " + comprarseHelado+"y su cambio es: "+cambio);
}

var dinero = prompt("Ingrese el dinero que tiene: ");
comprarHelado(pedro,helados);
let free = false;
/*Programa que deje pasar a personas que sean mayores de edad y la primer persona que haya llegado despues de las 2 am pero antes de las 7 am */
const validarCliente = (time)=>{
    let edad = prompt("Cual es tu edad?")
    if (edad >= 18){
        if(time >= 2 && time < 7 && free == false){
            alert("Puedes pasar gratis por que eres la primer persona que pasa despues de las 2:00 am")
            free = true;
        } else{
            alert(`Son las ${time}:00 puedes pasar pagando.`)
        }
    } else{
        alert("Eres menor de edad bro :v")
    }
}

validarCliente(1);
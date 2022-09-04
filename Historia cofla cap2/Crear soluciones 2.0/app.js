const agregarUsuario =(name)=>{
    var edad;
    var hora;
    while (true){
        edad = prompt("Ingresa tu edad:");

        hora = prompt("Ingrea la hora actual:");
        if(hora > 0 && hora <= 24){
            break
        }
        else{
            continue
        }
    }
    document.write("Name User:"+name+"<br/>");
    document.write("EdadUser:"+edad+"<br/>");
    document.write("Hora entrada user:"+hora+"<br/>");
    let values = [];
    values.push(edad); //Agregar elementos a un array
    values.push(hora);
    return values
}

const getNameUser =()=>{
    let name = prompt("Ingresa tu nombre:");
    return name;
}

let nameUser = getNameUser();
let values = agregarUsuario(nameUser);

console.log(nameUser);
console.log(values[0]);
console.log(values[1]);

if(values[0] < 18){
    alert("No puedes entrar eres menor de edad...")
}
else if(values[1] <= 2){
    alert("Entras gratis...")
}
else{
    alert("todo bien puedes pasar")
}

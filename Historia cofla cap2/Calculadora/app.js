const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}
const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}
const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}

alert("Que operacion decease realizar?");
let opcion = prompt("1:Sumar 2:Restar 3:Multiplicar 4:Dividir");

let num1, num2, resultado;

switch (opcion) {
    case "1":
        num1 = prompt("Ingresa el num1:")
        num2 = prompt("Ingresa el num2:")
        resultado = sumar(num1,num2);
        alert("El resultado de la operacion es: "+resultado);
        break;
    case "2":
        num1 = prompt("Ingresa el num1:")
        num2 = prompt("Ingresa el num2:")
        resultado = restar(num1,num2);
        alert("El resultado de la operacion es: "+resultado);
        break;
    case "3":
        num1 = prompt("Ingresa el num1:")
        num2 = prompt("Ingresa el num2:")
        resultado = multiplicar(num1,num2);
        alert("El resultado de la operacion es: "+resultado);
        break;
    case "4":
        num1 = prompt("Ingresa el num1:")
        num2 = prompt("Ingresa el num2:")
        resultado = dividir(num1,num2);
        alert("El resultado de la operacion es: "+resultado);
        break;
    default:
        alert("Operacion invalida...")
        break;
}
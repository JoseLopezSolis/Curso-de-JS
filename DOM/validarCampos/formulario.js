//Accedemos al id del formulario
const formulario = document.getElementById('formulario'); //CONTIENE TODO EL FORMULARIO
//Obtenemos todos los inputs del formulario
const inputs = document.querySelectorAll('#formulario input');//CONTIENE TODOS LOS INPUTS 

//EXPRESIONES REGULARES PARA LOS INPUTS
const expresiones={
    usuario : /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras , numeros , guion y guion_bajo
    nombre : /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios , pueden llevar acentos .
    password : /^.{4,12}$/, // 4 a 12 digitos .
    correo : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono : /^\d{7,14}$/ // 7 a 14 numeros . 
}

//target.value: obtenemos el valor del input
//target.name: obtenemos el 'name' del input

const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){ 
        //Si la expresion es correcta(true) aqui
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
    }else{
        //Sino aqui
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
    }
}

//HACER ALGO CADA VEZ QUE SE ESCRIBE EN EL INPUT
const validarFormulario = (e) =>{ //Comparamos el 'name' del input con el 'name' ee el input que estamos clickeando 
    switch (e.target.name){
    case "username":
        validarCampo(expresiones.usuario, e.target, 'username');
        break;
    case "name":
        validarCampo(expresiones.nombre, e.target, 'name');
        break;
    case "email":
        validarCampo(expresiones.correo, e.target, 'email');
        break;
    case "phone":
        validarCampo(expresiones.telefono, e.target, 'phone');
        break;
    case "password":
        validarCampo(expresiones.password, e.target, 'password');
        break;
    case "password2":
        validarCampo(expresiones.password, e.target, 'password2');
        break;
    default:x
        console.log('No se encontro el input '+e.target.name);
        break;
    }
}

//FUNCION PARA VALIDAR FORMULARION CADA QUE SE ESCRIBE EN EL CAMPO
inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario); //Cuando presiona una tecla, se va ejecutar un codigo
    input.addEventListener('blur', validarFormulario); //Cuando se sale del input, se va ejecutar un codigo
});

//ADD EVENT LISTENER PARA ENVIAR EL FORMULARIO
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Formulario enviado');
});
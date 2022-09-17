//ATRIBUTO DE LOS INPUTS
//input.classname - 'nombre de la clase';
//input.id - 'nombre del id';
//input.name - 'nombre del input';
//input.type - 'tipo de input';
//input.value - 'valor del input';
//input.accept - 'tipo de archivo aceptado';
//input.form - 'nombre del formulario';
//input.minLength - 'longitud minima';
//input.placeholder - 'texto de ayuda';
//input.required - 'requerido';

//HAY MUCHOS MAS PERO ESTOS SON LOS MAS IMPORTANTES


const input = document.querySelector('.input-normal');
input.placeholder = 'Hola que pasa';
input.type = 'text';
input.minLength = 10;
input.required = true; //Requerimos el campo en JS

document.write('<br>'+'El nombre de la clase es: ' + input.className + '<br>');
document.write('El valor del input es: ' + input.value + '<br>');
document.write('El nombre del id es: ' + input.id + '<br>');
document.write('El type del input es de: ' + input.type + '<br>');

//Para imagenes
//input.accept = ('.jpg, .png, .gif'); //solo acepta imagenes

input.setAttribute('styles','color: red');
document.write('Archivos que solo acepta :' + input.accept + '<br>');

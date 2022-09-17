//TRABAJAR CON CLASES CON JS
const div = document.querySelector('div');
//Agregar una clase
div.classList.add('nueva-clase');
//Eliminar una clase
div.classList.remove('nueva-clase');
//Verificar si tiene una clase
div.classList.contains('nueva-clase');
//Cambiar una clase 
div.classList.replace('nueva-clase', 'nueva-clase-2'); 
//Ver todas las clases

//CAMBIAREMOS LOS ESTILOS CON CLASES
div.classList.add('red');
div.classList.add('blue');
div.classList.add('green');
document.write(div.classList); //Lista de las clases
document.write('<br/>')
document.write(div.classList.length); //Cantidad de clases
document.write('<br/>')
document.write(div.classList.item(0)); //Obtener la clase del primer elemento
document.write('<br/>')
document.write(div.classList.contains('red')); //Para verificar que tenemos la clase (booleano)


div.classList.toggle('green'); //Verifica si la clase existe, si existe la elimina, sino existe la agregara
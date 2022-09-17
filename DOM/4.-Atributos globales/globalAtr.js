//ATRIBUTOS GLOBALES EN JS
//-Contenteditable - indica si el elemento puede ser modificable por el usuario (bool)
//-dir - indica la direccionalidad del texto
//-hidden - indica si el elemento aun no es, o ya no es relevante
//-style contiene declaraciones de estilo CSS para ser aplicadas al elemento
//-tabindex indica si el elemento puede obtener un focus de input
//-title contiene un texto con informacion relacionada al elemento al que pertenece

const titulo = document.querySelector('.titulo');
const aTag = document.querySelector('a');

//se puede editar (propiedad,bool)
titulo.setAttribute('contenteditable', true); 

//cambiar la manera en la que leemos el texto (ltr,rtl)
titulo.setAttribute('dir', 'rtl'); 

//ocultar el elemento (bool)
titulo.setAttribute('hidden', false); 
titulo.removeAttribute('hidden');

//cambiar el estilo del elemento (css)
titulo.setAttribute('style', 'color: black; font-size: 50px; text-align: center;');

//Le damos el orden en que se seleccionan los elementos con el tab
titulo.setAttribute('tabindex',0); 

//cambiar el texto que aparece al pasar el mouse sobre el elemento
titulo.setAttribute('title', 'Cambiamos el titulo');

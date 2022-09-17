//OBTENCION Y MODIFICACION DE ELEMENTOS DEL DOM
//*textContent - devuelve el texto de cualquier nodo
//innerText - devuelve el texto visible de un node element
//outerText - devuelve el texto que las etiquetas html incluidas las etiquetas.
//*innerHTML - devuelve el html de un node element
//*outerHTML - devuelve el html de un node element incluyendo las etiquetas
//nodeValue - devuelve el valor de un node element

const titulo2 = document.querySelector('#titulo');
console.log(titulo2.textContent); //Imprimimos el contenido de html
console.log(titulo2.innerHTML); //Imprimimos el contenido con todo y etiquetas
console.log(titulo2.outerHTML); //Imprimimos el contenido con todo y etiquetas

//CREAR ELEMENTOS DE HTML EN JS
//*createElement() - crea un elemento html --Creamos el elemento html
//*createTextNode() - crea un nodo de texto (elemento de texto) para escribir lo que va contener nuestro elementos html
//*createDocumentFragment() - crea un fragmento de documento --Documento que se crea para almacenar las etiquetas que creamos en JS

const container = document.querySelector('.container');
//Creamos un elemento li
const item = document.createElement('LI'); 
//Le agregamos el contenido
//ALTERNATIVA 1 ->item.innerHTML = 'Nuevo Item'; (No tiene las mismas propiedades de un objeto)

//Alternativa createTextNode()
const itemContent = document.createTextNode('Crear elemento2'); //tienes propiedades de un objeto
item.appendChild(itemContent);
container.appendChild(item);

console.log(item);

///AGREGAR MUCHOS ELEMENTOS
const container__items = document.querySelector('.container-items');

document.write(container__items);
//Metemos una cantidad de elementos de lista a un div
//De esta forma gastamos mucha memoria
//CREAR 10 LI ELEMENTOS CON JS
for(let i = 0; i <= 10; i++){
    const item1 = document.createElement('LI'); //Se crea el elemento
    item1.innerHTML = `Item ${i}`; //Se agrega el contenido
    container__items.appendChild(item1); //y se agrega al contenedor
}

//De esta forma gastammos menos memoria
//CREAR 10 a ELEMENTOS CON JS (Mejor forma)
const fragment = document.createDocumentFragment();
for(let i = 0; i <= 10; i++){
    const item2 = document.createElement('a');
    item2.textContent = `Item ${i}`; //Alamacenamos el contenido con textContent
    fragment.appendChild(item2); //Agregamos el contenido al fragmento
}

console.log(fragment); //Creamos 10 elementos a la vez
container__items.appendChild(fragment); //Agregamos el fragmento al contenedor
container__items.setAttribute('class', 'container-items'); //Agregamos una clase al contenedor
container__items.setAttribute('href', 'www.google.com'); //Agregamos un id al contenedor
container__items.setAttribute('id', 'a-tag'); //Agregamos un id al contenedor

